# React App Build
FROM node:12 as builder

WORKDIR /

COPY package.json ./
RUN npm install --silent
COPY . .
 RUN npm run build

# # Nginx에 build 결과물 upload
FROM nginx:1.17-alpine

RUN rm -rf /etc/nginx/conf.d
COPY --from=builder /build /usr/share/nginx/html
COPY --from=builder default.conf /etc/nginx/conf.d/

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]