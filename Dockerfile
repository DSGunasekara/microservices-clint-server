FROM node:15.13-alpine
WORKDIR /client-server
ADD package*.json ./
RUN npm install
ADD . .
CMD ["npm", "start"]