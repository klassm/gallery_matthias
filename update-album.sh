#!/usr/bin/env bash
git reset --hard
git fetch && git rebase 

npm install
PUPPETEER_CHROME_BIN="/usr/bin/chromium-browser" node update-album.js

git add site/public/config.json
git add docs/config.json
git commit -am "update photos"
git push
