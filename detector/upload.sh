#!/bin/sh
echo "Motion Detected!"
sleep 7;
echo "File uploading..." $1
curl -i -X POST \
	-H "Content-Type: multipart/form-data" \
	-H "Authorization: Bearer eyJhbGciOiJIUzUxMiIsImlhdCI6MTU1MjgzNTc1NCwiZXhwIjoxNTUzMDE1NzU0fQ.eyJpZCI6MX0.thvlYZIkuaNzekoEPlwUL_avd1nRTbhQPGdpGjcQYJ6n_aU0tBAvhmoCtR4g9thB6RLe358lHkmPtCDv4kSj6g" \
	-F "data=@${1}" \
	https://api.heyimhungryapp.com/api/listings/image
echo "Done."
