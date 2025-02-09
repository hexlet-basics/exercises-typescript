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
	npx eslint .

# compile:
#	@(for i in $$(find . -type f -name Main.java); do javac $$(dirname $$i)/*.java ; done)

# clean:
#   @$$(find . -type f -name *.class -delete)

compose-bash:
	docker compose run --rm exercises bash

compose-test:
	docker compose run --rm exercises make test

compose-down:
	docker compose down -v --remove-orphans

compose-description-lint:
	docker compose run --rm exercises make description-lint

compose-schema-validate:
	docker compose run --rm exercises make schema-validate

ci-check:
	docker compose --file docker-compose.yml build
	docker compose --file docker-compose.yml up --abort-on-container-exit

test-fast:
	npx jest
