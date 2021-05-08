from flask_restful import Api, Resource, reqparse
import sklearn
import pickle
import numpy as np


class covid_test(Resource):
    def __init__(self):
        self.model = pickle.load(
            open("api\\models\\finalized_model.sav", 'rb'))

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('age', type=int, help='age must be numeric')
        parser.add_argument('temprature', type=int,
                            help='temprature must be numeric')
        parser.add_argument(
            'sex', type=int, help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('diarrhea', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('fever', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('coughing', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('soreThroat', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('nausea', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('fatgue', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('renalDisease', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        parser.add_argument('diabetes', type=int,
                            help='bad input:{error_msg}', choices=(0, 1))
        args = parser.parse_args()
        print(args)

        return {
            'resultStatus': 'fine',
            'message': "Hello Api Handler",
        }
