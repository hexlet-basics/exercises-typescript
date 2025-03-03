FROM hexletbasics/base-image:latest

ENV PATH=/exercises-typescript/bin:/exercises-typescript/node_modules/.bin:$PATH
# ENV NODE_OPTIONS --max-old-space-size=4096
# --experimental-vm-modules
ENV CI=true

WORKDIR /exercises-typescript

RUN npm i -g vitest
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
