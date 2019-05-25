#!/usr/bin/env bash
git reset --hard
git fetch && git rebase 

npm install
PUPPETEER_CHROME_BIN="/usr/bin/chromium-browser" node update_album.js

git add config.json
git commit -am "update photos"
git push
