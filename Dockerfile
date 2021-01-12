FROM nginx

COPY dist/teste-dasa-front-A  /usr/share/nginx/html

EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf
