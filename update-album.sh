#!/usr/bin/env bash

npm install
node update_album.js

git add config.json
git commit -am "update photos"
git push