FROM node:alpine
RUN mkdir -p /usr/app/
WORKDIR /usr/app

#copy from to

COPY ./ ./

RUN npm install
RUN npx next build

EXPOSE 3000
CMD ["npx", "next","start"]