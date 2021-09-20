from flask import Flask,request,flash,Response,g,jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS
import json
from flask import make_response, Flask
import locale
from pytz import timezone
import pytz
import io
import sys
import time
import os
import requests
from datetime import datetime,timedelta

from Apiresf import Historial,Noticias,Clima
from flask_restful import Api, Resource


fmt = "%m"
now_time = datetime.now(timezone('Etc/GMT+5'))
mes = now_time.strftime(fmt)

fmtanio = "%Y"
now_time = datetime.now(timezone('Etc/GMT+5'))
anio = now_time.strftime(fmtanio)

fmtdia = "%Y-%m-%d"
now_time = datetime.now(timezone('Etc/GMT+5'))
fecha = now_time.strftime(fmtdia)

fthra = "%H:%M:%S"
now_time = datetime.now(timezone('Etc/GMT+5'))
horactual = now_time.strftime(fthra)

app= Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = "./static/up"
app.config['UPLOAD_FOLDERLOGO'] = "./static/logo"
app.config['MEDIA_DIR'] = "./static/img"

app.config['SECRET_KEY'] = 'massecretaqyeosdosso!'
api = Api(app)

tokens =  "0123456789"

api.add_resource(Historial,'/api/v1/historial')
api.add_resource(Noticias,'/api/v1/noticias/<texto>')
api.add_resource(Clima,'/api/v1/clima/<texto>')
@app.route('/', methods=['GET'])  
def helo():
    
    return jsonify('hello word')

    
if __name__ == '__main__':
    app.run(host = '127.0.0.1' , port=8080,debug=True)
   
