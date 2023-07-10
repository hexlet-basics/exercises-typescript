#! /bin/bash

set -e

tsc "$(pwd)/index.ts" "$(pwd)/test.ts" --noEmit --pretty --skipLibCheck --strict --lib esnext
jest --colors "$(pwd)"
