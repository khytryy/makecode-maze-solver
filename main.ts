radio.setGroup(1)
radio.setTransmitPower(4)
class Cell {
    static x: number
    private ___x_is_set: boolean
    private ___x: number
    get x(): number {
        return this.___x_is_set ? this.___x : Cell.x
    }
    set x(value: number) {
        this.___x_is_set = true
        this.___x = value
    }
    
    static y: number
    private ___y_is_set: boolean
    private ___y: number
    get y(): number {
        return this.___y_is_set ? this.___y : Cell.y
    }
    set y(value: number) {
        this.___y_is_set = true
        this.___y = value
    }
    
    static explored: boolean
    private ___explored_is_set: boolean
    private ___explored: boolean
    get explored(): boolean {
        return this.___explored_is_set ? this.___explored : Cell.explored
    }
    set explored(value: boolean) {
        this.___explored_is_set = true
        this.___explored = value
    }
    
    public static __initCell() {
        Cell.x = 0
        Cell.y = 0
        Cell.explored = false
    }
    
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    
}

Cell.__initCell()

basic.forever(function on_forever() {
    let distance = bitbot.sonar(BBPingUnit.Centimeters)
    //  Spin to left until the distance is more than 3 cm
    while (distance < 3) {
        bitbot.stop(BBStopMode.Brake)
        bitbot.spinDeg(BBRobotDirection.Right, 50, 90)
    }
    bitbot.go(BBDirection.Forward, 50)
})
