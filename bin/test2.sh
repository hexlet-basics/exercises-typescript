#!/bin/bash

# expectTypeOf() assertions and @ts-expect-error directives in test.ts are
# enforced by the compiler, not by the test runner: vitest strips types with
# esbuild and never checks them. This script is what validates a student's
# solution, so the type check has to happen here.
#
# The type check and the tests run concurrently, and their output is buffered:
# the platform kills a lesson run after a few seconds, and a wrong type is
# reported on its own instead of being buried under runtime output.

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
lesson="$(pwd)"

# The generated config is scoped to a single lesson, which keeps the check fast.
# typeRoots is spelled out because it is resolved relative to the config file,
# which lives outside the project.
tsconfig="$(mktemp -t tsconfig-lesson-XXXXXX.json)"
tsc_log="$(mktemp -t tsc-XXXXXX.log)"
vitest_log="$(mktemp -t vitest-XXXXXX.log)"
trap 'rm -f "$tsconfig" "$tsc_log" "$vitest_log"' EXIT INT TERM

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

# A type error is the root cause, so report it instead of the runtime output:
# vitest runs the code with the types stripped and may well pass regardless.
if [ "$tsc_status" -ne 0 ]; then
  cat "$tsc_log"
  exit 1
fi

cat "$vitest_log"
exit "$vitest_status"
