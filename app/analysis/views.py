from app import app
from flask import request, jsonify
from flask_caching import Cache
from .service import AnalysisService

@app.route('/process', methods = ['POST'])
def process():
	content = request.get_json()
	text = content['text']
	results = AnalysisService.extract_pos(text)
	return jsonify(results) 
