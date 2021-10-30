FROM hexletbasics/base-image:latest

RUN npm install -g typescript jest
RUN npm install -g babel-jest @babel/core @babel/preset-env
RUN npm install @types/jest

WORKDIR /exercises-typescript

COPY . .

ENV PATH /exercises-typescript/bin:$PATH
