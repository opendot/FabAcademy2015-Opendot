
import processing.serial.*;

import cc.arduino.*;

Arduino arduino;

color off = color(1, 1, 1);
color on = color(84, 145, 158);

void setup() {
  size(470, 280);

 
  println(Arduino.list());
  
  arduino = new Arduino(this, "/dev/tty.usbserial-FTH04VDZ", 57600);
 
  for (int i = 0; i <= 2; i++)
    arduino.pinMode(i, Arduino.INPUT);
}

void draw() {
  background(off);
  stroke(on);

  for (int i = 0; i <= 2; i++) {
    ellipse(90 + i * 150, 150, arduino.analogRead(i) / 10, arduino.analogRead(i) / 10);
    
  }
}
