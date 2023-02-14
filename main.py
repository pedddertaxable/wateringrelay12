def FillBucket():
    pins.digital_write_pin(DigitalPin.P0, 0)
    basic.pause(PumpTime)
    pins.digital_write_pin(DigitalPin.P0, 1)

def on_button_pressed_ab():
    basic.show_string("Waters ")
    basic.show_string("" + str((NoOfWaters)))
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def Run():
    global NoOfWaters
    while True:
        FillBucket()
        WaterPlants()
        NoOfWaters += 1
        basic.pause(WaterInterval)
def WaterPlants():
    pins.digital_write_pin(DigitalPin.P1, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.pause(WaterTime)
    pins.digital_write_pin(DigitalPin.P2, 0)
    basic.pause(RelayTrigger)
    pins.digital_write_pin(DigitalPin.P2, 1)
WaterInterval = 0
WaterTime = 0
PumpTime = 0
RelayTrigger = 0
NoOfWaters = 0
pins.digital_write_pin(DigitalPin.P0, 1)
pins.digital_write_pin(DigitalPin.P1, 1)
pins.digital_write_pin(DigitalPin.P2, 1)
NoOfWaters = 0
RelayTrigger = 10000
basic.show_string("TestA/RunB")
while True:
    if input.button_is_pressed(Button.A):
        PumpTime = 5 * 1000
        WaterTime = 5 * 1000
        WaterInterval = 10 * 1000
        Run()
    if input.button_is_pressed(Button.B):
        PumpTime = 60 * 60 * 1000
        WaterTime = 5 * 60 * 1000
        WaterInterval = 23 * 60 * 60 * 1000
        Run()