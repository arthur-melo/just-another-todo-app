FROM node:8-alpine

WORKDIR /app
ENV CI true

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run test

# /public is the directory used by Now.
RUN mv ./build /public
