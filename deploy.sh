#!/usr/bin/env sh

set -e

npm run build

cd dist

git init

git add -A 

git commit -m "Deploy release 1.0.3 of Tarot Espiritual Landing Page - Updating phone number and WhatsApp link."

git push -f git@github.com:codeslator/tarot-espiritual-landing-page.git master:gh-pages

cd -