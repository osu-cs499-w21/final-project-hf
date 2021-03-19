# BUILDER
FROM node:current-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci
COPY . .

ENV NODE_ENV=production
RUN npm run build
RUN npm prune --production


# FINAL
FROM node:current-alpine

RUN mkdir -p /home/app

ENV HOME=/home/app
ENV APP_HOME=/home/app/web
WORKDIR ${APP_HOME}

COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public

ENV NODE_ENV=production
USER node

EXPOSE 3000

CMD [ "npm", "start" ]
