// Watch video here: https://www.youtube.com/watch?v=T4yyK0G9Zgg

/* Connection pins:

Arduino     Current Sensor B43
A0                  VT
A1                  AT
+5V                 VIN
+5V                 VOUT
GND                 GND
*/


#include <Wire.h>

#define VB_PIN A0 // connect V battry
#define VC_PIN A3 // connect V cell
#define AT_PIN A1// connect A load
#define AC_PIN A2// connect A cell creat

#define ARDUINO_WORK_VOLTAGE 5.0

void setup()
{
	Serial.begin(9600);
	//Serial.println("VoltageB (Vb) / VoltageC (Vc) / Current (AT) / Current (AC)");

	TCCR2A = TCCR2A | 0x30;
	TCCR2B = TCCR2B & 0xF8 | 0x01;

}

  int SUM1=0;
  int Med1=0;
  int SUM2=0;
  int Med2=0;
  int cou=0;
  int PWMc=0;
  double currentMed2=0;
  
void loop()
{
	analogWrite(11, 0); //Load - 0=Full Load , 255=Low load
	// analogWrite(3, 255); //Cell - 0=Low Charge , 255=High Charge
	int vb_temp = analogRead(VB_PIN);
	int vc_temp = analogRead(VC_PIN);
	int at_temp = analogRead(AT_PIN);
	int ac_temp = analogRead(AC_PIN);
  
	SUM1=at_temp+SUM1;
	SUM2=ac_temp+SUM2;
	cou++;
	float voltageB = vb_temp * (13.8 / 900.0);
	float voltageC = vc_temp * (13.8 / 900.0);
	double current = at_temp * (ARDUINO_WORK_VOLTAGE / 1023.0);
	double currentc = ac_temp * (ARDUINO_WORK_VOLTAGE / 1023.0);
	if(voltageB<16){
		if(currentMed2<0.5){
			if(PWMc<255){
				PWMc=PWMc+5; 
			}
		}
		else
		{
			PWMc=PWMc-5;
		}
	}
	else
	{
		PWMc=0;
	}
  
  
	analogWrite(3, PWMc); //Cell - 0=Low Charge , 255=High Charge

     
	//Serial.print("Analog0: "); Serial.print(vb_temp); Serial.print(" / "); Serial.print("Analog3: "); Serial.print(vc_temp); Serial.print(" / "); Serial.print("Analog1: "); Serial.print(at_temp); Serial.print("Analog2: "); Serial.print(ac_temp);  Serial.print(" ----- "); 
	//Serial.print(voltageB); Serial.print(" / "); Serial.print(voltageC); Serial.print(" / "); Serial.print(current); Serial.print(" / "); Serial.println(currentc);
	delay(10);
    if(cou==100){
		Med1=SUM1/100;
		Med2=SUM2/100;
		SUM1=0;
		SUM2=0;
		cou=0;
		double currentMed1 = Med1 * (ARDUINO_WORK_VOLTAGE / 1023.0);
		currentMed2 = Med2 * (ARDUINO_WORK_VOLTAGE / 1023.0);
		Serial.print(" AMed1=");Serial.print(Med1);Serial.print(" AMed2=");Serial.print(Med2);Serial.print(" AvoltageB=");Serial.print(vb_temp);Serial.print(" AvoltageC=");Serial.print(vc_temp);
		Serial.print(" Med1=");Serial.print(currentMed1);Serial.print(" Med2=");Serial.print(currentMed2);Serial.print(" voltageB=");Serial.print(voltageB);Serial.print(" voltageC=");Serial.print(voltageC); Serial.println("");
		int Med1=0;
		int Med2=0;
	}
}






