FROM node:14

WORKDIR /var/www/app

COPY package* ./

RUN npm install

COPY . .
COPY .env.example ./.env

EXPOSE 8000

CMD npm start