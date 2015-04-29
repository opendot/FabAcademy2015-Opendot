const byte NUM_COLORS = 3;

// REQUIRED INTERVAL (IN MS) BETWEEN ANY CHANGE TO A COLOR CHANNEL
const byte COL_INTERVAL  = 50;
// VALUE ADDED OR SUBTRACTED TO A COLOR CHANNEL WHEN CHANGING ITS VALUE
const byte COL_VAR       = 5;

const byte DELAY_TIME    = 17;  // ~60FPS

const byte PIN_COLORS[] =  { 3, 5, 6 };    // OUTPUT PINS
const byte PIN_BUTTNS[] =  { 9, 10, 11 };  // INPUT PINS

// COLOR OF EACH CHANNEL
byte VAL_COLORS[]   = { 255, 255, 255 };
// TIMER USED TO CHANGE A COLOR QUITE SLOWLY
byte TIMER_COLORS[] = { 0, 0, 0 };


void setup()
{
  // cycle through the 3 channels
  for (int i = 0; i < NUM_COLORS; i++)
  {
    pinMode(PIN_COLORS[i], OUTPUT);
    pinMode(PIN_BUTTNS[i], INPUT);

    analogWrite(PIN_COLORS[i], 255);
  }
}

void loop()
{
  // cycle through the 3 buttons/channels
  for (int i = 0; i < NUM_COLORS; i++)
  {
    byte button = digitalRead(PIN_BUTTNS[i]);

    if (HIGH == button)
    {
      if (VAL_COLORS[i] > 0)
      {
        TIMER_COLORS[i] += DELAY_TIME;

        if (TIMER_COLORS[i] > COL_INTERVAL)
        {
          VAL_COLORS[i] -= COL_VAR;

          TIMER_COLORS[i] = 0;
        }
      }
    }
    else  // button is LOW, not pushed
    {
      if (VAL_COLORS[i] < 255)
      {
        TIMER_COLORS[i] += DELAY_TIME;

        if (TIMER_COLORS[i] > COL_INTERVAL)
        {
          VAL_COLORS[i] += COL_VAR;

          TIMER_COLORS[i] = 0;
        }
      }
    }

    // write color for LED i
    analogWrite(PIN_COLORS[i], VAL_COLORS[i]);
  }

  // pause for a short time
  delay(DELAY_TIME);
}
