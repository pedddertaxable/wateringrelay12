def on_button_pressed_a():
    basic.show_number(1)
    pins.digital_write_pin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(RunCount)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_number(2)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P2, 1)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

RelayTrigger = 0
RunCount = 0
pins.digital_write_pin(DigitalPin.P1, 1)
pins.digital_write_pin(DigitalPin.P2, 1)
RunCount = 0
WaterTime = 2 * (60 * 1000)
WateringTimeIncrease = 10000
WaterInterval = 12 * (60 * (60 * 1000)) - WaterTime
RelayTrigger = 10000

def on_forever():
    global RunCount, WaterInterval, WaterTime
    pins.digital_write_pin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(WaterTime)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P2, 1)
    RunCount += 1
    basic.pause(WaterInterval)
    WaterInterval += -1 * WateringTimeIncrease
    WaterTime += WateringTimeIncrease
basic.forever(on_forever)
