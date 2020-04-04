# React App Build
FROM node:12 as builder

WORKDIR /

COPY package.json ./
RUN npm install --silent
COPY . .
 RUN npm run build

# # Nginx에 build 결과물 upload
FROM nginx:1.17-alpine

COPY --from=builder /build /usr/share/nginx/html

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]