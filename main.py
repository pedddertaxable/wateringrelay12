def on_button_pressed_a():
    global WaterTime
    WaterTime += 10 * 1000
    basic.show_number(WaterTime / 1000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global RunCount
    basic.show_number(WaterTime / 1000)
    pins.digital_write_pin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(WaterTime)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P2, 1)
    RunCount += 1
    basic.pause(WaterInterval)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global WaterTime
    WaterTime += -10 * 1000
    basic.show_number(WaterTime / 1000)
input.on_button_pressed(Button.B, on_button_pressed_b)

RelayTrigger = 0
WaterInterval = 0
WaterTime = 0
pins.digital_write_pin(DigitalPin.P1, 1)
pins.digital_write_pin(DigitalPin.P2, 1)
RunCount = 0
WaterTime = 2 * 60 * 1000
WaterInterval = 12 * 60 * 60 * 1000 - WaterTime
RelayTrigger = 10000
basic.pause(5000)
while True:
    pins.digital_write_pin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(WaterTime)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P2, 1)
    RunCount += 1
    basic.pause(WaterInterval)
    WaterTime += 10000