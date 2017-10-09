FROM node:8.6.0

ADD sports /opt/
RUN ls /opt/sports/
COPY sports/enterpoint.sh /opt/sports/
RUN chmod 777 /opt/sports/enterpoint.sh && \
    ls /opt/sports/
ENTRYPOINT [ "./opt/sports/enterpoint.sh" ]
EXPOSE 3000
