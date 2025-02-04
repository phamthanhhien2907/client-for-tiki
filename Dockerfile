FROM node

WORKDIR /app

COPY package.json package-lock.json ./


RUN npm install

COPY . .

ENV PATH="./node_modules/.bin:$PATH"

EXPOSE 3000

CMD ["npm", "start"]
