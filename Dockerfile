FROM node:24.16.0-alpine3.23

WORKDIR /app

COPY app/package*.json ./
RUN npm install --omit=dev && npm cache clean --force

COPY --chown=node:node app/ ./

ENV NODE_ENV=production

USER node

EXPOSE 8080

CMD ["node", "/app/app.js"]
