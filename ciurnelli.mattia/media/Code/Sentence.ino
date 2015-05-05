

#include "SPI.h"
#include "font.h"
#include "lcd8x8rgb.h"

boolean point = 1;
unsigned char h[] = " Week 11 - Output Device ";

void setup() {
  Serial.begin(9600);

  SPI.setDataMode(SPI_MODE1);
  SPI.setClockDivider(SPI_CLOCK_DIV64);
  SPI.begin();

  pinMode(chipSelectPin, OUTPUT);

  vClear();
}

void loop() {
  point =! point; //code for writing a scrolling sentence
  scrollString(h, point);
  Transfer();
  delay(100);
  vClear();
}

