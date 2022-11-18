#stage 1
FROM --platform=linux/amd64 node:latest as node 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM --platform=linux/amd64 nginx:alpine
COPY --from=node /app/dist/achagro-web /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
