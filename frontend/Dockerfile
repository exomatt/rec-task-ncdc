FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY  ./frontend/docker-build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

