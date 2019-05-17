#!/bin/sh

# IMAGE_NAME=lazyatom/rpi-motion
IMAGE_NAME=samlehman617/motion
VIDEO_DIRECTORY=`pwd`/videos

mkdir -p $VIDEO_DIRECTORY
echo "Building..."
docker build -t $IMAGE_NAME .
echo "Running..."
docker run -d --device=/dev/video0:/dev/video0 \
	-p 8081:8081 $IMAGE_NAME
	# -v $VIDEO_DIRECTORY:/mnt/motion \
echo "Done."
