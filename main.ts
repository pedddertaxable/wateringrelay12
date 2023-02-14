function FillBucket () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showString("" + (TextList[0]))
    basic.pause(PumpTime)
    pins.digitalWritePin(DigitalPin.P0, 1)
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("#Waters ")
    basic.showString("" + (NoOfWaters))
    basic.pause(1000)
    basic.clearScreen()
})
function Run () {
    while (true) {
        FillBucket()
        WaterPlants()
        NoOfWaters += 1
        basic.pause(WaterInterval)
    }
}
function WaterPlants () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showString("" + (TextList[1]))
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showString("" + (TextList[2]))
    basic.pause(WaterTime)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showString("" + (TextList[3]))
    basic.pause(RelayTrigger)
    pins.digitalWritePin(DigitalPin.P2, 1)
}
let TextList: string[] = []
let WaterInterval = 0
let WaterTime = 0
let PumpTime = 0
let RelayTrigger = 0
let NoOfWaters = 0
basic.showIcon(IconNames.Yes)
basic.pause(100)
basic.clearScreen()
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
NoOfWaters = 0
RelayTrigger = 10000
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Test")
        PumpTime = 5 * 1000
        WaterTime = 5 * 1000
        WaterInterval = 10 * 1000
        TextList = [
        "Pump",
        "Open",
        "Water",
        "Close"
        ]
        Run()
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("Run")
        TextList = [
        "",
        "",
        "",
        ""
        ]
        PumpTime = 60 * 60 * 1000
        WaterTime = 5 * 60 * 1000
        WaterInterval = 23 * 60 * 60 * 1000
        Run()
    }
}
