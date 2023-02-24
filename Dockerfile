FROM --platform=linux/amd64 node:19.7-slim as node
RUN  apt-get update \
  && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build 
EXPOSE 4200


