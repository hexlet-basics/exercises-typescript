FROM hexletbasics/base-image:latest

RUN npm install -g jest jest-cli

WORKDIR /exercises-typescript

COPY . .

RUN npm install

ENV PATH /exercises-typescript/bin:$PATH
