#!/bin/bash

# Type-checks one lesson and runs its tests. See "Type checking" in README.md for
# why the compiler step exists at all.
#
# The two run concurrently and their output is buffered: the platform kills a
# lesson run after a few seconds, and a type error is worth reporting on its own
# rather than under runtime output that only passed because types were erased.

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
lesson="$(pwd)"

tsconfig="$(mktemp --suffix=.json "${TMPDIR:-/tmp}/tsconfig-lesson-XXXXXX")"
tsc_log="$(mktemp "${TMPDIR:-/tmp}/tsc-XXXXXX.log")"
vitest_log="$(mktemp "${TMPDIR:-/tmp}/vitest-XXXXXX.log")"
tsc_pid=''

cleanup() {
  if [ -n "$tsc_pid" ]; then
    kill "$tsc_pid" 2>/dev/null
  fi
  rm -f "$tsconfig" "$tsc_log" "$vitest_log"
}

# Each signal handler exits: a handler that only cleans up would delete the logs
# and then let the script resume reading them, turning a killed run into a pass.
trap cleanup EXIT
trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

# The config is scoped to a single lesson, which keeps the check fast. typeRoots
# is spelled out because it is resolved relative to the config file, which lives
# outside the project.
cat > "$tsconfig" <<EOF
{
  "extends": "$root/tsconfig.json",
  "compilerOptions": {
    "typeRoots": ["$root/node_modules/@types"]
  },
  "files": ["$lesson/index.ts", "$lesson/test.ts"]
}
EOF

tsc --noEmit --project "$tsconfig" > "$tsc_log" 2>&1 &
tsc_pid=$!

FORCE_COLOR=1 vitest related --run "$lesson/test.ts" --no-cache > "$vitest_log" 2>&1
vitest_status=$?

wait "$tsc_pid"
tsc_status=$?
tsc_pid=''

# A type error is the root cause, so report it instead of the runtime output.
if [ "$tsc_status" -ne 0 ]; then
  cat "$tsc_log"
  exit 1
fi

cat "$vitest_log"
exit "$vitest_status"
