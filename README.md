# twitter-node-osc-pd
uses twitter-node and node-osc modules to stream tweets into PD

npm install twitter
https://www.npmjs.com/package/twitter#for-user-based-authentication

npm install node-osc
https://github.com/MylesBorins/node-osc

MIDI to DMX light control and PD patch: test.pd from this instructable: http://www.instructables.com/id/MIDI2DMX/step3/Program-the-Teensy/
This is the open source DMX2MIDI controller I used

The code in main.js uses both of these node modules to trigger a PD Patch using a twitter stream. For different twitter quaries (search without stream, location ect, see npm twitter docs). 

I've included a patch which triggers a DMX 7 channel light to turn on and off and (random) change colors with each tweet message. Netrecieve is the port for the OSC code, and sends message codes to the PD objects


