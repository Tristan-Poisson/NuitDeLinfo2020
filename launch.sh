#!/bin/sh

npm ci
npm run build
cd server
gradle bootRun
