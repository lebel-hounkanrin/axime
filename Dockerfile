FROM --platform=linux/amd64 node:latest as node
WORKDIR /app
COPY ./achagro-web .
RUN npm install
RUN npm run build 
EXPOSE 4200
#CMD npm run build   

FROM nginx:alpine
COPY --from=node ./dist/achagro-web /usr/share/nginx/html

