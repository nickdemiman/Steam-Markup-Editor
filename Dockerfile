FROM node:20.13.1-alpine AS build

WORKDIR /root
COPY . .

RUN <<EOF
    npm ci
    npm run build
EOF

FROM nginx:1.27.0-alpine AS final

COPY --from=build /root/out/ /var/www/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000