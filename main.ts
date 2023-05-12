/**
 * Program that use the NeoPixel Extension to display a rainbow of colours over 12 LEDs
 * 
 * NeoPixel hardware required
 */
// Initialise the NeoPixel strip with 12 LEDs
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
// Initialise the NeoPixel strip with 12 LEDs
let Ring = neopixel.create(DigitalPin.P14, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
Ring.showRainbow(1, 100)
basic.forever(function () {
    Ring.rotate(1)
    strip.rotate(1)
    Ring.show()
    basic.pause(50)
})
