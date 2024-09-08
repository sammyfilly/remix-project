FROM nginx:1-alpine3.20
WORKDIR /

COPY ./temp_publish_docker/ /usr/share/nginx/html/

EXPOSE 80
