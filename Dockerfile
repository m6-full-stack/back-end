FROM node:18.14.1

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app