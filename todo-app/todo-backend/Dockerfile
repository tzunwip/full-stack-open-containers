FROM node:16

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR usr/src/app

COPY --chown=node:node "package.json" "package-lock.json" .

RUN npm ci --production && npm cache clean --force

COPY --chown=node:node . .

USER node

CMD ["dumb-init", "node", "./bin/www"]
