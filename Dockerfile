FROM node:16 as base

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  ca-certificates \
  curl \
  sudo

WORKDIR /workspaces/app-05-firebase-api

FROM base as development

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  git

COPY package.json .

RUN npm install
RUN npm install -g expo-cli @expo/ngrok@^4.1.0

COPY . .

VOLUME ["/workspaces/app-05-firebase-api/node_modules"]
