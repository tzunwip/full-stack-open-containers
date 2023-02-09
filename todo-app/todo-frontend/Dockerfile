FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY package* .

RUN npm ci

COPY . .

RUN CI=true npm test

ARG REACT_APP_BACKEND_URL

RUN REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL} npm run build

FROM nginx:1.23.3-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
