import os
import logging
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
	nlp = spacy.load("fr_core_news_sm")
	return nlp

nlp = get_nlp()

from .analysis import views
from .home import views