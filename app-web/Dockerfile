FROM node:16.12

WORKDIR /home/api

COPY . .

RUN npm install

RUN npm run build

CMD npm start