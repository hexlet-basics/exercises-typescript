FROM hexletbasics/base-image:latest

RUN npm install -g jest jest-cli

WORKDIR /exercises-typescript

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

ENV PATH /exercises-typescript/bin:$PATH
