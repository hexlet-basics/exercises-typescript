FROM hexletbasics/base-image:latest

WORKDIR /exercises-typescript

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

ENV PATH /exercises-typescript/bin:$PATH
# ENV NODE_OPTIONS --experimental-vm-modules
ENV CI true
