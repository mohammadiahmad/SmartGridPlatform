import serial
import struct
import time
arduino = serial.Serial('COM6', 9600, timeout=0.1)
time.sleep(2)
flag=True
while(flag):
	a=int(input("Enter 0 to turn of led and 1 to turn on led: "))
	if(a==-1):
		break
	arduino.write(struct.pack('>B',a))

