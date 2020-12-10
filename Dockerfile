FROM node:12-alpine

# Env

ARG port=8000
ENV PORT=$port

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install
RUN npm run build

EXPOSE $PORT

CMD [ "node", "./build/index.js"]