-include /opt/basics/common/common.mk

compose-setup: compose-build compose-install

compose:
	docker compose up

compose-build:
	docker compose pull
	docker compose build

compose-install:
	docker compose run --rm exercises npm install

compose-update:
	docker compose run --rm exercises npx ncu -u

code-lint:
	npx @biomejs/biome check

code-lint-fix:
	npx @biomejs/biome check --fix

# Type checking is a separate step because expectTypeOf() assertions and
# @ts-expect-error directives in lesson tests are enforced by the compiler, not
# by vitest. This checks the whole course at once; bin/test2.sh additionally
# checks a single lesson, because that is the script the platform runs against
# a student's solution.
type-check:
	npx tsc --noEmit

# common.mk defines `test` with a recipe and `check` without one, so appending a
# prerequisite here is legal and puts the fast aggregate type report before the
# per-lesson runs. `check` picks it up through `test`.
test: type-check

.PHONY: type-check

# compile:
#	@(for i in $$(find . -type f -name Main.java); do javac $$(dirname $$i)/*.java ; done)

# clean:
#   @$$(find . -type f -name *.class -delete)

compose-bash:
	docker compose run --rm exercises bash

compose-test:
	docker compose run --rm exercises make test

compose-description-lint:
	docker compose run --rm exercises make description-lint

compose-schema-validate:
	docker compose run --rm exercises make schema-validate

ci-check:
	docker compose --file docker-compose.yml build
	docker compose --file docker-compose.yml up --abort-on-container-exit

test-fast:
	npx vitest

update-deps:
	npx ncu -u
