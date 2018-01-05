#import serial
import numpy as np
import json
import requests
'''
ser = serial.Serial('/dev/ttyACM0', 9600)

data=ser.readline()
data=ser.readline()
data=ser.readline()
data=ser.readline()
data=data.decode('utf-8')
data=data.rstrip()
data=data.split(' ')
'''

while True:
	data=['','','','','','a=2',"b=2","c=2","d=2"]
	for i in range(5):
            del data[0]
	newConditions = {'pid':2,data[0].split('=')[0]:data[0].split('=')[1], data[1].split('=')[0]:data[1].split('=')[1], data[2].split('=')[0]:data[2].split('=')[1], data[3].split('=')[0]:data[3].split('=')[1]} 
	params = json.dumps(newConditions)#.encode('utf8')
	res=requests.post('http://127.0.0.1:5000/gatherdata',json=params)
	if res.ok:
		print("OK")
		
	'''data=ser.readline()
	data=data.decode('utf-8')
    data=data.rstrip()
	data=data.split(' ')'''