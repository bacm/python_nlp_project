import os
import spacy
              
from flask import Flask, request, render_template, redirect, url_for, jsonify, send_from_directory
from flask_caching import Cache

project_root = os.path.dirname(os.path.realpath('__file__'))
template_path = os.path.join(project_root, 'app/templates')
static_path = os.path.join(project_root, 'app/static')
app = Flask(__name__, template_folder=template_path, static_folder=static_path)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@cache.cached(timeout=50, key_prefix='nlp')
def get_nlp():
	nlp = spacy.load("fr_core_news_md")
	return nlp

nlp = get_nlp()

@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('app/static/js', path)

@app.route('/process', methods = ['POST'])
def process():
	content = request.get_json()
	doc = nlp(content['text'])
	return jsonify([{"text": token.text, "pos": token.pos_, "dep": token.dep_} for token in doc]) 
