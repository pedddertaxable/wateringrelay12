input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(RunCount)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.clearScreen()
})
let RelayTrigger = 0
let RunCount = 0
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
RunCount = 0
let WaterTime = 2 * (60 * 1000)
let WateringTimeIncrease = 5000
let WaterInterval = 12 * (60 * (60 * 1000)) - WaterTime
RelayTrigger = 10000
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(WaterTime)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P2, 1)
    RunCount += 1
    basic.pause(WaterInterval)
    WaterInterval += -1 * WateringTimeIncrease
    WaterTime += WateringTimeIncrease
})
