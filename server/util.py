import json

def prepare_key_value(key, value):
	return json.dumps({key: value}, indent=4)