from app import app
from flask import send_from_directory

@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)