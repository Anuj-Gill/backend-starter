FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npx tsc -b

EXPOSE 3000
CMD ["node", "dist/index.js" ]
