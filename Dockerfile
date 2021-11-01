FROM hexletbasics/base-image:latest

RUN npm install -g jest jest-cli

WORKDIR /exercises-typescript

COPY . .

ENV PATH /exercises-typescript/bin:$PATH
