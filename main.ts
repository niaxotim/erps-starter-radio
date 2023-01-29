input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showIcon(IconNames.Snake)
    } else if (receivedString == "B") {
        basic.showIcon(IconNames.Ghost)
    } else if (receivedString == "shake") {
        basic.showIcon(IconNames.Chessboard)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("shake")
})
radio.setGroup(255)
