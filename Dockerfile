FROM node:8.6.0

ADD sports /opt/
RUN ls /opt/ && \
    node -v && \
    npm -v
ENTRYPOINT [ "bash", "/opt/enterpoint.sh" ]
EXPOSE 3000
