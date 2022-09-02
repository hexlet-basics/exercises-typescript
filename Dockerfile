FROM hexletbasics/base-image:latest

WORKDIR /exercises-typescript

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

ENV PATH /exercises-typescript/bin:$PATH
# ENV NODE_OPTIONS --max-old-space-size=4096
# --experimental-vm-modules
ENV CI true
