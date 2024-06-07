input.onButtonPressed(Button.B, function () {
    if (DuckSpeed >= "#1" && duckSpeedInverse <= "8") {
        DuckSpeed += 1
    }
})
let duckSpeedInverse = 0
let DuckSpeed = 0
DuckSpeed = 1
duckSpeedInverse = 400
pins.setAudioPinEnabled(false)
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
