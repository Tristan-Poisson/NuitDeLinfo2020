#!/bin/sh

npm ci
npm run build
cd server
sudo gradle wrapper --gradle-version 6.7
sudo ./gradlew bootRun
