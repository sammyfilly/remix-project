FROM nginx:1.25.4-alpine3.18
WORKDIR /

COPY ./temp_publish_docker/ /usr/share/nginx/html/

EXPOSE 80
