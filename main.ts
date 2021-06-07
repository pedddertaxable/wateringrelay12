input.onButtonPressed(Button.A, function () {
    WaterTime += 10 * 1000
    basic.showNumber(WaterTime / 1000)
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
    basic.pause(WaterInterval)
})
input.onButtonPressed(Button.B, function () {
    WaterTime += -10 * 1000
    basic.showNumber(WaterTime / 1000)
})
let RelayTrigger = 0
let WaterInterval = 0
let WaterTime = 0
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
let RunCount = 0
WaterTime = 2 * 60 * 1000
WaterInterval = 12 * 60 * 60 * 1000 - WaterTime
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
    basic.pause(WaterInterval)
    WaterTime += 10000
}
