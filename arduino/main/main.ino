const int ledPin=13;
int opnum;
int on=-1;
void setup() {
  // initialize serial:
  Serial.begin(9600);
  pinMode(13, OUTPUT);  
}


void loop() {
  if(on==0)
  {
    digitalWrite(ledPin,LOW);
  }
  else if(on==1)
  {
    digitalWrite(ledPin,HIGH);
    delay(1000);
  }
}


void serialEvent() {
  if(Serial.available()){
    opnum=Serial.read();
    if(opnum==0)
    {
      on=0;
    }
    if(opnum==1)
    {
      on=1;
    }
  }
}
