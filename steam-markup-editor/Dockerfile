FROM oven/bun:1.1.42 AS build

WORKDIR /build
COPY package.json bun.lockb ./
RUN bun i --frozen-lockfile


COPY . .
RUN bun run build

FROM nginx:1.27.0-alpine AS final

COPY --from=build /build/out/ /var/www/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8000