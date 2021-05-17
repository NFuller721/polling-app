from flask import Flask, render_template, request, session
from MySQLPackage import *

App = Flask(__name__)
App.secret_key = 'secretKey'

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

def Vote(pollId, option):
    Database, Cursor = Start()
    if option == "A":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, columns=["optionACount"])[0][0] + 1

        Update(Database=Database, Cursor=Cursor, table="Polls", id=pollId, dict={"optionACount": Count})

        return {"Response": "Voted"}
    elif option == "B":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, columns=["optionBCount"])[0][0] + 1

        Update(Database=Database, Cursor=Cursor, table="Polls", id=pollId, dict={"optionBCount": Count})

        return {"Response": "Voted"}
    elif option == "C":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, columns=["optionCCount"])[0][0] + 1

        Update(Database=Database, Cursor=Cursor, table="Polls", id=pollId, dict={"optionCCount": Count})

        return {"Response": "Voted"}
    elif option == "D":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, columns=["optionDCount"])[0][0] + 1

        Update(Database=Database, Cursor=Cursor, table="Polls", id=pollId, dict={"optionDCount": Count})

        return {"Response": "Voted"}
    elif option == "E":
        Count = Read(Database=Database, Cursor=Cursor, table="Polls", id=pollId, columns=["optionECount"])[0][0] + 1

        Update(Database=Database, Cursor=Cursor, table="Polls", id=pollId, dict={"optionECount": Count})

        return {"Response": "Voted"}
    else:
        return {"Error": "invalid option"}
def setVoted(pollId):
    if f"{pollId}" not in session:
        session[f"{pollId}"] = {
            "voted": False
        }

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
                setVoted(pollId)

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
                    "voted": session[f"{pollId}"]["voted"]
                }

                return {"Response": Response}
            return {"Error": "This action needs a POST request to work"}
        elif option == "create":
            if request.method == "POST":

                Database, Cursor = Start()
                Create(Database=Database, Cursor=Cursor, table="Polls", dict={
                    "title": request.json["title"],
                    "optionACount": 0 if request.json["optionATitle"] != None else None,
                    "optionATitle": request.json["optionATitle"] if request.json["optionATitle"] != None else None,
                    "optionBCount": 0 if request.json["optionBTitle"] != None else None,
                    "optionBTitle": request.json["optionBTitle"] if request.json["optionBTitle"] != None else None,
                    "optionCCount": 0 if request.json["optionCTitle"] != None else None,
                    "optionCTitle": request.json["optionCTitle"] if request.json["optionCTitle"] != None else None,
                    "optionDCount": 0 if request.json["optionDTitle"] != None else None,
                    "optionDTitle": request.json["optionDTitle"] if request.json["optionDTitle"] != None else None,
                    "optionECount": 0 if request.json["optionETitle"] != None else None,
                    "optionETitle": request.json["optionETitle"] if request.json["optionETitle"] != None else None,
                })

                print(0 if "optionETitle" in request.json else None)

                # THIS IS NOT A GOOD WAY TO DO THIS I KNOW
                pollId = Read(Database=Database, Cursor=Cursor, table="Polls")[-1][0]

                return {"Response": {"pollId": pollId}}
            return {"Error": "This action needs a POST request to work"}
        elif option == "vote":
            if request.method == "POST":
                pollId = int(request.json["pollId"])
                option = request.json["option"]

                session[f"{pollId}"] = {"voted": True}

                return Vote(pollId, option)
            return {"Error": "This action needs a POST request to work"}

        elif option == "deleteAll":
            Database, Cursor = Start()
            Delete(Database=Database, Cursor=Cursor, table="Polls")
    return {"Error": "Wrong key!"}

if __name__ == '__main__':
    App.debug = True
    App.run()
