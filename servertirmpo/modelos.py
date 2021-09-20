from flaskext.mysql import MySQL
from flask import Flask,jsonify
from werkzeug.security import generate_password_hash,check_password_hash
from datetime import datetime,timedelta

app= Flask(__name__)

mysql = MySQL(app)

app.config['MYSQL_DATABASE_HOST'] = 'localhost'
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'noticias'

mysql.init_app(app)


class Consultas():
    
    def __init__(self):
        car = True


    def verhistorial(self):
        self.lisnw =[]
        conn = mysql.connect()
        cur = conn.cursor()
        cur.execute('SELECT * FROM historial')
        data = cur.fetchall()
        conn.commit()
        conn.close()
        
        
        for result in data:
            content = {'id': int(result[0]), 'ciudad': str(result[1]),'fecha': str(result[2]), 'origen': str(result[3]), 'consulta': str(result[4])}
            self.lisnw.append(content)
        
        
    def guardahist(self,ciudad,fecha,origen,consulta):
        conn = mysql.connect()
        cur = conn.cursor()
        cur.execute('INSERT INTO historial (ciudad, fecha, origen,consulta) VALUES(%s,%s,%s,%s)',(ciudad,fecha,origen,consulta))
        
        conn.commit()
        conn.close()
    