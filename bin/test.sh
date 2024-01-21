#!/bin/bash

set -e

if [ ! -z $CHECK_TESTS ]; then
  tsc "$(pwd)/index.ts" "$(pwd)/test.ts" --noEmit --pretty --skipLibCheck --strict --lib esnext --target esnext --module esnext --moduleResolution node
else
  tsc "$(pwd)/index.ts" --noEmit --pretty --skipLibCheck --strict --lib esnext --target esnext --module esnext
fi

jest --colors "$(pwd)"
