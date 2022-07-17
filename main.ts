input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(RunCount)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    WaterTime += 10 * 1000
    basic.showNumber(WaterTime / 1000)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(WaterTime / 1000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(WaterTime)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P2, 1)
    RunCount += 1
    basic.pause(BetweenWatering)
})
input.onButtonPressed(Button.B, function () {
    WaterTime += -10 * 1000
    basic.showNumber(WaterTime / 1000)
    basic.pause(2000)
    basic.clearScreen()
})
let RelayTrigger = 0
let BetweenWatering = 0
let WaterTime = 0
let RunCount = 0
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
RunCount = 0
WaterTime = 2 * 60 * 1000
BetweenWatering = 12 * 60 * 60 * 1000 - WaterTime
RelayTrigger = 10000
basic.pause(5000)
while (true) {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(WaterTime)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P2, 1)
    RunCount += 1
    basic.pause(BetweenWatering)
    WaterTime += 10000
}
