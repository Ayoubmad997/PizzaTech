FROM nginx:latest

COPY index.html app.js /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx" , "-g" , "daemon off;"]