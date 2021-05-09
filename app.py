from math import dist
from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS  # comment this on deployment
from api.hello import HelloApiHandler
from api.covid_test import covid_test
from api.bed_information import bed_info
from api.distance import distance
app = Flask(__name__, static_url_path='', static_folder='react-app/build')
CORS(app)  # comment this on deployment
api = Api(app)

print(app.instance_path)


@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


api.add_resource(HelloApiHandler, '/flask/hello')
api.add_resource(covid_test, "/test")
api.add_resource(bed_info, "/bed")
api.add_resource(distance, "/distance")
