#! /bin/bash

npx tsc "$(pwd)/index.ts" "$(pwd)/test.ts" --noEmit --pretty --skipLibCheck --strict &&
npx jest --colors "$(pwd)"
