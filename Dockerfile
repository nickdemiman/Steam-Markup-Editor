FROM node:20.13.1-alpine AS build

WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci


COPY . .
RUN npm run build

FROM nginx:1.27.0-alpine AS final

COPY --from=build /build/out/ /var/www/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000