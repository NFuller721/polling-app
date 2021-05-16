from flask import Flask, render_template

App = Flask(__name__)

@App.route('/', defaults={'path': ''})
@App.route('/<path:path>')
def index(path):
    return render_template('index.html')

@App.route('/Api/<key>/<pollId>')
def Api(key, pollId):
    if key == "API_KEY":
        return {"Response": {"Message": "Cool. cool, cool, cool", "Poll ID": pollId}}
    return {"Error": "Wrong key!"}

if __name__ == '__main__':
    App.debug = True
    App.run()
