FROM node:16

WORKDIR /myapp
COPY package.json .
RUN npm install

EXPOSE 4000

COPY . .
CMD npm start