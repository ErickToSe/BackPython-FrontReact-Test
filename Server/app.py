from flask import Flask, jsonify

# app instance
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
@app.route("/modelo")
def modelo():
    #jsonFormat
    return {"Datos": ["dato1", "dato2"]} 

if __name__ == "__main__":
    app.run(debug=True, port=5000)