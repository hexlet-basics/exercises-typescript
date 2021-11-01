FROM hexletbasics/base-image:latest

RUN npm install -g typescript
RUN npm install -g jest jest-cli babel-jest @babel/core @babel/preset-env
RUN npm install -g ts-jest @types/jest
RUN npm install -g sinon

WORKDIR /exercises-typescript

COPY . .

ENV PATH /exercises-typescript/bin:$PATH
