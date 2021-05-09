from flask_restful import Api, Resource, reqparse
import numpy as np
import pandas as pd
import csv
from bs4 import BeautifulSoup as bs
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time


class bed_info(Resource):
    # def __init__(self):
    #     url = "https://coronabeds.jantasamvad.org/"
    #     driver = webdriver.Chrome(r"api/selenium/chromedriver")
    #     driver.get(url)
    #     time.sleep(5)
    #     html = driver.page_source
    #     driver.close()
    #     soup = bs(html, 'html.parser')
    #     filename = 'api\\bed_informations\\DelhiBedData.csv'
    #     f = open(filename, 'w', encoding="utf-8")
    #     csv_writer = csv.writer(f)

    #     data = []
    #     for i in soup.find_all('p', {"class": "card-text"}):
    #         data.append(i.get_text())
    #     if(data):
    #         csv_writer.writerow(data)
    #     f.close()
    #     url = "https://coronabeds.jantasamvad.org/beds.html"

    #     driver = webdriver.Chrome(r"api/selenium/chromedriver")
    #     driver.get(url)
    #     time.sleep(5)
    #     html = driver.page_source
    #     driver.close()
    #     soup = bs(html, 'html.parser')
    #     filename = 'api\\bed_informations\\DelhiData.csv'
    #     f = open(filename, 'w', encoding="utf-8")
    #     csv_writer = csv.writer(f)

    #     data = []

    #     table_top = soup.find_all('tr', {"class": "table-success"})
    #     for i in table_top:
    #         temp = []
    #         for j in i.find_all('a'):
    #             temp.append(j.get_text())
    #         csv_writer.writerow(temp)

    #     data = []

    #     table_top = soup.find_all('tr', {"class": "table-warning"})
    #     for i in table_top:
    #         temp = []
    #         for j in i.find_all('a'):
    #             temp.append(j.get_text())
    #         csv_writer.writerow(temp)

    #     data = []

    #     table_top = soup.find_all('tr', {"class": "table-danger"})
    #     for i in table_top:
    #         temp = []
    #         for j in i.find_all('a'):
    #             temp.append(j.get_text())
    #         csv_writer.writerow(temp)

    #     f.close()

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('count',
                            help='count must be a boolean value')
        parser.add_argument('top',
                            help='top must be a boolean value')
        args = parser.parse_args()
        if(args.top == "true"):
            df = pd.read_csv(
                'api\\bed_informations\\DelhiData.csv', header=None)
            df.columns = ['ID', 'Hospital', 'Time_stamp',
                          'Total_Beds', 'Vacant_Beds', 'Contact', 'O2_left']
            df['O2_left'].fillna(0, inplace=True)
            df = df.drop(['Contact', 'ID'], axis=1)
            df = df.sort_values("Vacant_Beds", ascending=False)
            final_array = df.head(5).values.tolist()
        else:
            df = pd.read_csv(
                'api\\bed_informations\\DelhiBedData.csv', header=None)
            df_t = df.T
            a = df_t.to_numpy()
            b = []
            c = []
            d = []
            for i in range(9):
                if i < 3:
                    b.append(a[i][0])
                elif (i > 2) and (i < 6):
                    c.append(a[i][0])
                else:
                    d.append(a[i][0])
            f = [b, c, d]
            dataset = f
            dfn = pd.DataFrame(dataset, columns=[
                               'Total', 'Occupied', 'Vaccant'])
            data = [['COVID19_Beds'], [
                'COVID-19_Oxygen_Beds'], ['COVID-19_ICU_Beds']]
            data = pd.DataFrame(data, columns=['Type'])
            df_col = pd.concat([data, dfn], axis=1)
            final_array = df_col.values.tolist()

        return {
            "final_array": final_array,
        }
