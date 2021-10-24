FROM node:16.12

WORKDIR /home/api

RUN npm install

RUN npm run build

RUN npm run typorm migrations:run

CMD npm run start:dev