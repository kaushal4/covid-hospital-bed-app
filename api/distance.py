from flask_restful import Api, Resource, reqparse
import pandas as pd


class distance(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('lat',
                            help='count must be a boolean value')
        parser.add_argument('lan',
                            help='count must be a boolean value')
        args = parser.parse_args()
        latFin = args.lat
        lonFin = args.lan

        df = pd.read_csv("api\\bed_informations\\Hospital_Lat_Long.csv")
        df.columns = ['Hospital Name', 'Latitude', 'Longitude']
        df.dropna(axis=0, inplace=True)
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
        dist = []
        for i in range(len(list(res.values()))):
            val = list(res.values())[i]
            lat_hosp = float(str(val[0])[:-1])
            lon_hosp = float(str(val[1])[:-1])
            lat1 = float(latFin)
            lat2 = lat_hosp
            lon1 = float(lonFin)
            lon2 = lon_hosp
            dist.append([list(res.keys())[i], str(
                distance(lat1, lat2, lon1, lon2))])
        df = pd.DataFrame(dist)
        df.columns = ["Name", "Distance"]
        finList = df.sort_values('Distance').values.tolist()
        print(finList)
        best5List = finList[0:5]
        df.columns = ["Name", "Distance"]
        finList = df.sort_values('Distance').values.tolist()
        bedDetail = pd.read_csv(
            'api\\bed_informations\\DelhiData_1.csv', header=None)
        bedDetail.columns = ['Hospital', 'Time_stamp',
                             'Total_Beds', 'Vacant_Beds', 'Contact', 'O2_left']
        bedDetail = bedDetail.drop(['Contact'], axis=1)
        bedDetail.dropna(axis=0, inplace=True)
        bedDetail = bedDetail.drop(
            ['Time_stamp', 'Total_Beds', 'O2_left'], axis=1)
        l = []
        l = bedDetail['Hospital']
        p = []
        p = bedDetail['Vacant_Beds']
        res = {}
        p1 = p.values.tolist()
        res = {}
        s1 = ""
        for key in l:
            for value in p1:
                s1 = key.strip()
                s1 = s1.strip()
                res[s1] = value
                p1.remove(value)
                break

        c = []
        s = ""
        for i in range(5):
            s = best5List[i][0].strip()
            c.append(s)

        val = []
        print(res)
        for i in range(5):
            if(res[c[i]]):
                val.append(res[best5List[i][0]])
            else:
                val.append(0)
        return {
            'resultStatus': 'SUCCESS',
            'message': "Hello Api Handler",
            "val": val,
            "c": c,
        }
