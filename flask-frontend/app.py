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

def Vote(option):
    if option == "A":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, column="optionACount")[0][0]
        print(Count)
        return {"Response": "Voted"}
    elif option == "B":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, column="optionBCount")[0][0]
        print(Count)
        return {"Response": "Voted"}
    elif option == "C":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, column="optionCCount")[0][0]
        print(Count)
        return {"Response": "Voted"}
    elif option == "D":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, column="optionDCount")[0][0]
        print(Count)
        return {"Response": "Voted"}
    elif option == "E":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, column="optionECount")[0][0]
        print(Count)
        return {"Response": "Voted"}
    else:
        return {"Error": "invalid option"}

@App.route('/', defaults={'path': ''})
@App.route('/<path:path>')
def index(path):
    return render_template('index.html')

@App.route('/Api/<key>/<option>', methods=["GET", "POST"])
def Api(key, option):
    if key == "467586970086574653":
        if option == "read":
            if request.method == "POST":
                pollId = int(request.json["pollId"])

                Database, Cursor = Start()
                Poll = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId)[0]

                Response = {
                    "id": Poll[0],
                    "title": Poll[1],
                    "optionACount": Poll[2],
                    "optionATitle": Poll[3],
                    "optionBCount": Poll[4],
                    "optionBTitle": Poll[5],
                    "optionCCount": Poll[6],
                    "optionCTitle": Poll[7],
                    "optionDCount": Poll[8],
                    "optionDTitle": Poll[9],
                    "optionECount": Poll[10],
                    "optionETitle": Poll[11],
                }

                return {"Response": Response}
            return {"Error": "This action needs a POST request to work"}
        elif option == "create":
            if request.method == "POST":
                return {"Response": "200 - ok"}
            return {"Error": "This action needs a POST request to work"}
        elif option == "vote":
            if request.method == "POST":
                pollId = int(request.json["pollId"])
                option = request.json["option"]

                return Vote(option)
            return {"Error": "This action needs a POST request to work"}
    return {"Error": "Wrong key!"}

if __name__ == '__main__':
    App.debug = True
    App.run()
