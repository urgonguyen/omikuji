input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        # # # # #
        # # # # #
        # # # # #
        `)
    none.scrollImage(1, speed)
    omikuji = randint(0, 99)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    for (let index = 0; index < 1; index++) {
        if (omikuji < 10) {
            dai.scrollImage(1, speed)
            none.scrollImage(1, speed)
            kichi.scrollImage(1, speed)
            none.scrollImage(1, speed)
        } else if (omikuji < 40) {
            kichi.scrollImage(1, speed)
            none.scrollImage(1, speed)
        } else if (omikuji < 60) {
            chuu.scrollImage(1, speed)
            none.scrollImage(1, speed)
            kichi.scrollImage(1, speed)
            none.scrollImage(1, speed)
        } else if (omikuji < 80) {
            syou.scrollImage(1, speed)
            none.scrollImage(1, speed)
            kichi.scrollImage(1, speed)
            none.scrollImage(1, speed)
        } else if (omikuji < 90) {
            kyou.scrollImage(1, speed)
            none.scrollImage(1, speed)
        } else {
            dai.scrollImage(1, speed)
            none.scrollImage(1, speed)
            kyou.scrollImage(1, speed)
            none.scrollImage(1, speed)
        }
    }
})
let omikuji = 0
let speed = 0
let chuu: Image = null
let syou: Image = null
let dai: Image = null
let kyou: Image = null
let kichi: Image = null
let none: Image = null
none = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
kichi = images.createImage(`
    . . # . .
    # # # # #
    . # # # .
    . . . . .
    . # # # .
    `)
kyou = images.createImage(`
    . # . # .
    # . # . #
    # # . # #
    # . . . #
    # # # # #
    `)
dai = images.createImage(`
    . . # . .
    # # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
syou = images.createImage(`
    . . # . .
    # . # . #
    # . # . #
    # . # . #
    . . # . .
    `)
chuu = images.createImage(`
    . . # . .
    # # # # #
    # . # . #
    # # # # #
    . . # . .
    `)
speed = 200
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    # # # . #
    # # # # #
    `)
