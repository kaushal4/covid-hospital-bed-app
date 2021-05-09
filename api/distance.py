from flask_restful import Api, Resource, reqparse
import pandas as pd


class distance(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('position',
                            help='count must be a boolean value')
        args = parser.parse_args()
        [latInput, lonInput] = args.position

        def convertTodeg(lat, lon):
            latfin = float(lat.split(' ')[
                           0][1:-1]) + float(lat.split(' ')[1][:-1])/60 + float(lat.split(' ')[2][:-2])/3600
            lonfin = float(lon.split(' ')[
                           0][1:-1]) + float(lon.split(' ')[1][:-1])/60 + float(lon.split(' ')[2][:-2])/3600
            return latfin, lonfin

        latFin = convertTodeg(latInput, lonInput)[0]
        lonFin = convertTodeg(latInput, lonInput)[1]
        df = pd.read_csv("api\\bed_informations\\Hospital_Lat_Long.csv")
        df.columns = ['ID', 'Hospital Name', 'Latitude', 'Longitude']
        hospName = df['Hospital Name'].values.tolist()
        latitude = df['Hospital Name'].to_numpy()
        longitude = df['Hospital Name'].to_numpy()
        df1 = df['Latitude']
        df2 = df['Longitude']
        df_col = pd.concat([df1, df2], axis=1)
        a = df_col.values.tolist()
        l = df['Hospital Name'].values.tolist()
        res = {}
        for key in l:
            for value in a:
                res[key] = value
                a.remove(value)
                break
        val = res['Avanitka Hospital']
        lat_hosp = float(str(val).split(',')[0][1:-1])
        lon_hosp = float(str(val).split(',')[1][1:-1])
        from math import radians, cos, sin, asin, sqrt

        def distance(lat1, lat2, lon1, lon2):

            # The math module contains a function named
            # radians which converts from degrees to radians.
            lon1 = radians(lon1)
            lon2 = radians(lon2)
            lat1 = radians(lat1)
            lat2 = radians(lat2)

            # Haversine formula
            dlon = lon2 - lon1
            dlat = lat2 - lat1
            a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2

            c = 2 * asin(sqrt(a))

            # Radius of earth in kilometers. Use 3956 for miles
            r = 6371

            # calculate the result
            return(c * r)
        return {
            'resultStatus': 'SUCCESS',
            'message': "Hello Api Handler"
        }
