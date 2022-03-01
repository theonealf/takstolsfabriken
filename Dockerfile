FROM node:14-alpine

WORKDIR /frontdata/timmele.se

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4200

CMD /frontdata/timmele.se/node_modules/.bin/ng run Timmeletakstolsfabrik:serve-ssr --host 0.0.0.0 --disableHostCheck
