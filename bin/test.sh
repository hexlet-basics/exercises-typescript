#! /bin/sh
npx tsc --noEmit &
npx jest --colors `pwd` &
wait
