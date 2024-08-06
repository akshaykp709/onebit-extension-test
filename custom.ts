/**
 * Custom blocks
 */
//% color=#2b569b weight=10 icon="\uf1b9"
namespace ContinuousServo {

    /**
    * Spins the motor in one direction at full speed
    * @param pin Which pin the motor is on
    */
    //% blockId=spin_one_way weight=100
    //% block="spin one way pin %pin"
    export function spin_one_way(pin = AnalogPin.P1): void {
        pins.servoWritePin(pin, 180)
    }}