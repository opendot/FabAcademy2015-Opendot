
#include<Wire.h>

#include <LiquidCrystal.h>
 
LiquidCrystal lcd(12, 11, 5, 4, 3, 2); 

const int MPU=0x68;  

int AcX,AcY;
void setup()
{
  Serial.begin(9600);

  lcd.begin(20, 4);
  Wire.begin();
  Wire.beginTransmission(MPU);
  Wire.write(0x6B); 

  Wire.write(0); 
  Wire.endTransmission(true);

 
}
void loop()
{
  Wire.beginTransmission(MPU);
  Wire.write(0x3B);  
  Wire.endTransmission(false);
  
  Wire.requestFrom(MPU,14,true);  

  AcX=Wire.read()<<8|Wire.read();      
  AcY=Wire.read()<<8|Wire.read();   

  lcd.setCursor(0,0);
  lcd.print("Accelerometro"); 

  Serial.print("AcX = "); Serial.print(AcX);
  lcd.setCursor(0,1);
  lcd.print("X=");
  lcd.print(AcX);
   

  Serial.print(" | AcY = "); Serial.print(AcY);
  lcd.setCursor(7,1);
  lcd.print("Y=");
  lcd.print(AcY);
   
   

  delay(300);
  lcd.clear();
}
