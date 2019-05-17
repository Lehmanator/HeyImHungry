FROM resin/rpi-raspbian:latest

RUN apt-get update && apt-get upgrade && apt-get install motion
RUN mkdir /mnt/motion && chown motion /mnt/motion
# COPY /motion.conf /etc/motion/
# COPY / /etc/motion/
COPY upload.sh /upload.sh
COPY motion.conf /motion.conf
# VOLUME /etc/motion
# VOLUME /mnt/motion
EXPOSE 8081
ENTRYPOINT ["motion", "-c", "/motion.conf"]
