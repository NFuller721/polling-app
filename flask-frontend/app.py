from flask import Flask, render_template
from MySQLPackage import *

App = Flask(__name__)

Connection = Connection(
    host="127.0.0.1",
    username="Noah721",
    password="Satchel21",
    databaseName="Polls"
)

def Start():
    Connection.run()

    Database = Connection.getDatabase()
    Cursor = Connection.getCursor()

    return Database, Cursor

@App.route('/', defaults={'path': ''})
@App.route('/<path:path>')
def index(path):
    return render_template('index.html')

@App.route('/Api/<key>/<pollId>')
def Api(key, pollId):
    if key == "API_KEY":
        Database, Cursor = Start()
        Response = Read(Database=Database, Cursor=Cursor, table="Polls")
        
        return {"Response": Response}
    return {"Error": "Wrong key!"}

if __name__ == '__main__':
    App.debug = True
    App.run()
