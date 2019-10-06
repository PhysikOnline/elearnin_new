FROM node:10.16.3

RUN npm install -g nodemon 
USER node
RUN mkdir /home/node/dev
WORKDIR /home/node/dev
RUN npm install

CMD ["npm", "run", "start"]