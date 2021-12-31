#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A 

git commit -m "Deploy release 1.0 of Tarot Espiritual Landing Page"

git push -f git@github.com:codeslator/tarot-espiritual-landing-page.git master:gh-pages

cd -