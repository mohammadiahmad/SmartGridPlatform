from flask import Flask,request, jsonify,json
from flask import render_template
import random

app = Flask(__name__)

data=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]

@app.route("/")
def mainpage():
    return render_template('index.html')

@app.route("/recdata", methods=['POST'])
def receivejson():
	content = request.json
	temp=[0,0,0,0]
	if content['pid']==1:
		temp=data[0]
	elif content['pid']==2:
		temp=data[1]
	elif content['pid']==3:
		temp=data[2]
	elif content['pid']==4:
		temp=data[3]
	return jsonify({"index":temp})

@app.route("/gatherdata",methods=['POST'])
def gatherdata():
	content = request.json
	content=json.loads(content)
	if content['pid']==1:
		data[0]=[float(content['Med1']),float(content['Med2']),float(content['voltageB']),float(content['voltageC'])]
	elif content['pid']==2:
		data[1]=[float(content['Med1']),float(content['Med2']),float(content['voltageB']),float(content['voltageC'])]
	elif content['pid']==3:
		data[2]=[float(content['Med1']),float(content['Med2']),float(content['voltageB']),float(content['voltageC'])]
	elif content['pid']==4:
		data[3]=[float(content['Med1']),float(content['Med2']),float(content['voltageB']),float(content['voltageC'])]
	return jsonify({"ok":"ok"})
	
	
if __name__ == "__main__":
    app.run(host='0.0.0.0')
