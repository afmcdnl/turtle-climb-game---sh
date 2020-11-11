function TurtleGo () {
    turtle.forward(1)
    basic.pause(Speed)
    Speed += -20
    line += 1
}
function TurtleGoUp () {
    if (line > 4) {
        line = 0
        distance += -1
        turtle.setPosition(0, distance)
    }
}
input.onGesture(Gesture.Shake, function () {
    turtle.setPosition(line, 4)
    distance = 4
    turtle.setBrightness(Brightness + 25)
    Brightness += 25
})
let line = 0
let distance = 0
let Speed = 0
let Brightness = 0
turtle.setBrightness(25)
turtle.pen(TurtlePenMode.Down)
turtle.setPosition(0, 4)
turtle.turnRight()
Brightness = 25
Speed = 500
distance = 4
line = 0
basic.forever(function () {
    if (distance < 0) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        TurtleGo()
        TurtleGoUp()
    }
})
