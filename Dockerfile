FROM hexletbasics/base-image:latest

WORKDIR /exercises-typescript

COPY . .

ENV PATH /exercises-typescript/bin:$PATH

RUN npm install -g jest jest-cli
RUN npm install

