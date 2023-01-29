### @activities true
### @explicitHints true

# ERPS :: Starting with Radio - Tutorial

## Introduction
### Introduction Step @unplugged
Welcome to your first turorial on how to use the in-built radio in your BBC micro:bit!  
You are going to make a simple transmitter and receiver with your micro:bit, which responds to signals sent by a friend.  
![Interactive badge](https://raw.githubusercontent.com/niaxotim/erps-starter-radio/master/assets/microbit-radio.png)

## Setting up our radio
### Step 1
Our BBC micro:bit has an in-built radio transmitter. This transmitter works on different 'channels'.  

We have to set which channel we want to use to transmit, and then listen on the same channel when we receive.  

Let's set our radio channel using a ``||radio:radio set group||`` block - make sure you set it to the channel assigned to you!  
  

#### ~ tutorialhint
```blocks
radio.setGroup(255)
```

## Sending over the radio
### Step 2
Let's decide on what we are going to send over the radio. We can use our button inputs again to trigger sending things.  

Drag a ``||input:on button A||`` on to your editor, and then have a look in the radio menu. We want to send some text over the radio - in programming, we often
refer to text as *'strings'*. So let's now drag a ``||radio:radio send string ""||`` block over, and set the string to "A".

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
```

### Step 3
Let's do the same when we press the 'B' button, but this time, send the string "B" over the radio.

Drag the right blocks in to your editor.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
```

### Step 4
Finally, let's us a new kind of input for our micro:bit. Remember, the micro:bit also has an *accelerometer*, which means it knows when it
is being moved about!

This time, let's drag a ``||input:on shake||`` block in, and this time, send the string "shake" over the radio.

#### ~ tutorialhint
```blocks
input.onGesture(Gesture.Shake, function () {
    radio.sendString("shake")
})
```

## Receiving over the radio
### Step 5
Great, so now we are sending text over the radio. But what about receiving?  

For that, there's the ``||radio:on radio received receivedString||`` block.  Drag one on to your editor.  

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {

})
```

### Step 6
Remember that we're now sending 3 different strings over the radio, so we can expect 3 back. Which means we
want a *conditional* statement to check for what string we have received.  

Drag an ``||logic:if-else||`` block in to your radio receieve block. Click on the '+' symbol to create an *if-else* statement, and then do that
again to create a second one. Press the '-' button to remove the last *else* statement. Check out the hint to make sure your code looks right!  

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (true) {
    } else if (false) {
    } else if (false) {
    }
})
```

### Step 7
Now we need to change each of those default 'true' and 'false' statements to actually check for what has been received by our radio.  

Drag a ``||logic:"" = ""||`` block in to where it says 'true' in our 'if' statement. Then drag the red coloured 'receivedString' block in to the left-hand-side of the '=' statement.  

The red *receivedString* block indicates that we have a *variable*, which means it's value can change!  

Now make sure the right-hand-side has "A" as the string.  

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
    } else if (false) {
    } else if (false) {
    }
})
```

### Step 8
Now do the same for the second part of our if-statement. Make sure we have a block that checks that receivedString = "B".

In the final part of our if-statement, we need to check for when receivedString = "shake".  

Check the hint if you're not sure what your code should look like!  

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
    } else if (receivedString == "B") {
    } else if (receivedString == "shake") {
    }
})
```

### Step 9
OK, so we're set up to receive strings on the radio! Let's make our micro:bit show something when we receive those strings.  

In each of our if-statement blocks, drag a ``||basic:show icon||`` block, and choose a different icon for each part.  

#### ~ tutorialhint
```blocks
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showIcon(IconNames.Snake)
    } else if (receivedString == "B") {
        basic.showIcon(IconNames.Ghost)
    } else if (receivedString == "shake") {
        basic.showIcon(IconNames.Chessboard)
    }
})
```

### Step 10
Connect your BBC micro:bit and click ``|Download|``.  

Make sure your partner has also got the code working on their micro:bit.  Then press the buttons and shake yours, and see
what happens to your friend's micro:bit!  

Do you see icons appearing as expected on their micro:bit? If not, check that you're both using the same radio channel!

### Step 11
As a final challenge, see if you can have different icons displayed, or perhaps even add some more *input* methods other than 'A', 'B', and 'shake'.  

Don't forget, if you add more inputs, you'll have to check for more strings being received!  


### Basic radio tutorial Complete @unplugged
Great work! You've now transmitted data from one micro:bit to another using the radio!
![Great job](https://raw.githubusercontent.com/niaxotim/erps-starter-radio/master/assets/great_job.png)
