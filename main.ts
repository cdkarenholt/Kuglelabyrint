/**
 * Hej
 */
// Hej
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
radio.setGroup(70)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogReadWritePin.P1),
    0,
    1023,
    0,
    4
    ), pins.map(
    pins.analogReadPin(AnalogReadWritePin.P2),
    0,
    1023,
    0,
    4
    ))
    radio.sendNumber(pins.analogReadPin(AnalogReadWritePin.P1))
    radio.sendValue("", pins.analogReadPin(AnalogReadWritePin.P2))
})
