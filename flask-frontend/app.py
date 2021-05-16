from flask import Flask, render_template, request
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

@App.route('/Api/<key>/<option>', methods=["GET", "POST"])
def Api(key, option):
    if key == "467586970086574653":
        if option == "read":
            if request.method == "POST":
                console.log(request.form)
                pollId = request.form["pollId"]

                Database, Cursor = Start()
                Poll = Read(Database=Database, Cursor=Cursor, table="Polls", id=int(pollId))[0]

                Response = {
                "id": Poll[0],
                "title": Poll[1],
                "optionACount": Poll[2],
                "optionBCount": Poll[3],
                "optionCCount": Poll[4],
                "optionDCount": Poll[5],
                "optionECount": Poll[6],
                }

                return {"Response": Response}
            return {"Error": "This action needs a POST request to work"}
        elif option == "create":
            if request.method == "POST":
                return {"Response": "200 - ok"}
            return {"Error": "This action needs a POST request to work"}
        elif option == "vote":
            if request.method == "POST":
                return {"Response": "200 - ok"}
            return {"Error": "This action needs a POST request to work"}
    return {"Error": "Wrong key!"}

if __name__ == '__main__':
    App.debug = True
    App.run()
