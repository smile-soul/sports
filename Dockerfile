FROM node:6.11.4

ADD sports /opt/
RUN ls /opt/ && \
    node -v && \
    npm -v
ENTRYPOINT [ "bash", "/opt/enterpoint.sh" ]
EXPOSE 3000
