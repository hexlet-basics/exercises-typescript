#! /bin/bash

tsc "$(pwd)/index.ts" "$(pwd)/test.ts" --noEmit --pretty --skipLibCheck --strict &&
jest --colors "$(pwd)"
