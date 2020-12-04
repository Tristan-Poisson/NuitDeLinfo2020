#!/bin/sh

npm ci
npm build
cd server
gradle bootRun
