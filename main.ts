music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    range.showRainbow(music.volume(), 360)
})
music.onEvent(MusicEvent.BackgroundMelodyPaused, function () {
    range.clear()
})
let range: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
range = strip.range(0, 24)
range = strip.range(0, 24)
