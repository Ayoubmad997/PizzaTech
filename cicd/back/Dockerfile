FROM node: latest
WORKDIR /app
COPY packege*.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD ["node" , "server.js"]