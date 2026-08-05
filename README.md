# exercises-typescript

[![GitHub Actions Status](../../workflows/Docker/badge.svg)](../../actions)

## How to contribute

* Discuss the project on Telegram: https://t.me/hexletcommunity/12

### Requirements

* docker
* docker compose V2
* make

## Develop

```bash
# setup
make
# run
make compose
# check
make ci-check

# run tests
make compose-test

# run linters and validators
make code-lint
make compose-type-check
make compose-description-lint
make compose-schema-validate
```

### Type checking

Type checking is a separate step from the tests, in two places:

* `make type-check` runs `tsc --noEmit` over the whole course. It is a
  prerequisite of `make test`, so `make check` and CI pick it up.
* `bin/test2.sh` type-checks a single lesson alongside its tests. This script —
  not `make check` — is what the platform runs against a student's solution, so
  a wrongly typed solution has to be rejected here.

Both are needed because vitest strips types with esbuild and never checks them:
without a compiler step, `expectTypeOf(...)` assertions and `@ts-expect-error`
directives in lesson tests silently pass no matter what the lesson exports.

Three settings in `tsconfig.json` are load-bearing for these steps, since nothing
compiled the course before them:

* `"moduleResolution": "bundler"` — the old `node10` value is a hard error in
  TypeScript 6, and `bundler` matches how vitest resolves the extensionless
  imports lessons use.
* `"types": ["node"]` — TypeScript 6 no longer picks up `node_modules/@types`
  on its own, and lessons use `console` and `node:path`. A lesson needing other
  ambient types has to add them here.
* `"noEmit": true` — so a bare `tsc` never drops `.js` files next to lessons.

##
[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=exercises-typescript)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io/?utm_source=github&utm_medium=link&utm_campaign=exercises-typescript).
##

See most active contributors on [hexlet-friends](https://friends.hexlet.io/).
