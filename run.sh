#!/usr/bin/env bash
set -e
docker build -t gallery "$PWD"
docker run -d -p 4000:4000 -v "$PWD":/srv/jekyll gallery
