FROM node:8.9.0

ADD server /opt/
ENTRYPOINT [ "node", "/opt/app.js"]
EXPOSE 10010
