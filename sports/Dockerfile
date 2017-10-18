FROM node:6.11.4

ADD client /opt/
RUN ls /opt
COPY enterpoint.sh /opt/
RUN ls /opt/
ENTRYPOINT [ "./opt/enterpoint.sh" ]

EXPOSE 8080
