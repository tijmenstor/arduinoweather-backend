FROM node:8-slim

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install & npm install tsc -g

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]
