
from flask_restful import Api, Resource, reqparse
import sklearn
import pickle
import numpy as np


class covid_test(Resource):
    def __init__(self):
        self.model = pickle.load(
            open("api\\models\\finalized_model_SVM.sav", 'rb'))

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

        final_arr = []
        for x, y in args.items():
            if(x == 'age'):
                final_arr.append((y/100))
            elif(x == 'temprature'):
                final_arr.append((y/42))
            elif(x == 'sex'):
                if(y == 0):
                    final_arr.append(1)
                    final_arr.append(0)
                else:
                    final_arr.append(0)
                    final_arr.append(1)
            else:
                final_arr.append(y)
        print(final_arr)
        prediction = self.model.predict([final_arr])
        confidence = self.model.predict_proba([final_arr])
        prediction = prediction.tolist()
        confidence = confidence.tolist()
        return {
            'resultStatus': 'fine',
            'prediction': prediction,
            'confidence': confidence,
        }
