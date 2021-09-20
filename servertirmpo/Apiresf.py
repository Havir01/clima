
from flask import Flask, request,jsonify,Response
from modelos import Consultas
from flask_restful import Resource, Api
import requests
import time
from datetime import datetime,timedelta
import locale
from pytz import timezone
import json
todos = {}
fmtdia = "%Y-%m-%d"

class Noticias(Resource):
    def __init__(self):
        self.st =True
        self.consul = Consultas()

    def get(self,texto):
        now_time = datetime.now(timezone('Etc/GMT+5'))
        _fecha = now_time.strftime(fmtdia)
        _token = "dea7a3f430734be2aa1fab6db064bd83"
        _url = "https://newsapi.org/v2/everything?q="+texto+"&from="+_fecha+"&sortBy=popularity&apiKey="+_token
       
        try:
            if texto !="undefined":
                self.consul.guardahist(texto,_fecha,request.remote_addr,"noticia")
            self.resp = requests.get(_url)

            return Response( self.resp, status=201, mimetype='application/json')
        except Exception as e:
            print(e)
            return jsonify({"resp":"error"})
 
class Clima(Resource):
    def __init__(self):
        self.st =True
        self.consul = Consultas()

    def get(self,texto):
        now_time = datetime.now(timezone('Etc/GMT+5'))
        _fecha = now_time.strftime(fmtdia)
        _url = "https://api.openweathermap.org/data/2.5/weather?q="+texto+"&appid=c4b50dc5a2153461eba7c093b731c1cb"
        print(texto)
        try:
            if texto !="undefined":
                self.consul.guardahist(texto,_fecha,request.remote_addr,"clima")
            self.resp = requests.get(_url)

            return Response( self.resp, status=201, mimetype='application/json')
        except Exception as e:
            print(e)
            return jsonify({"resp":"error"})       
class Historial(Resource):
    def __init__(self):
        self.consul = Consultas()

    def get(self):
        #print('entro el valor id '+str(id))
        
        self.consul.verhistorial()
        co = self.consul.lisnw
        return jsonify(co)
   
    