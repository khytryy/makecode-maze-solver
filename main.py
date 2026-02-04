radio.set_group(1)
radio.set_transmit_power(4)

class Cell:
    x = 0
    y = 0

    explored = False

    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

def on_forever():
    
    distance = bitbot.sonar(BBPingUnit.CENTIMETERS)

    # Spin to left until the distance is more than 3 cm
    while (distance < 3):
        bitbot.stop(BBStopMode.BRAKE)
        bitbot.spin_deg(BBRobotDirection.RIGHT, 50, 90)

    bitbot.go(BBDirection.FORWARD, 50)


basic.forever(on_forever)