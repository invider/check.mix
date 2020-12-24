const MAX = 100

const c1 = []
const c2 = []
const c3 = []

function init() {
    log('')
    log('=========================')
    log('')

    log( lighten(hsl(.5, .5, .5), .5))

    for (let i = 0; i < MAX; i++) {
        const r = rnd()
        const g = rnd()
        const b = rnd()
        c1[i] = rgb(r, g, b)

        const h = rgb2hsl(r, g, b)
        c2[i] = hsl(h[0], h[1], h[2])
    }
}

function draw() {
    const border = 20
    const w = 80
    const h = 45
    const pad = 10
    const skip = 2
    let x = border
    let y = border

    for (let i = 0; i < MAX; i++) {
        fill(c1[i])
        rect(x, y, w, h)

        fill( lighten(c2[i], 1.5))
        rect(x+w+skip, y, w/3, h/3)
        fill(c2[i])
        rect(x+w+skip + w/3, y, w/3, h/3)
        fill( lighten(c2[i], .5))
        rect(x+w+skip + w/3 + w/3, y, w/3, h/3)

        fill( saturate(c2[i], 5) )
        rect(x+w+skip, y + h/3, w/3, h/3)
        fill( saturate(c2[i], 1.5) )
        rect(x+w+skip + w/3, y + h/3, w/3, h/3)
        fill( saturate(c2[i], .5) )
        rect(x+w+skip + w/3 + w/3, y + h/3, w/3, h/3)

        fill( shiftHue(c2[i], .1) )
        rect(x+w+skip, y + h/3 + h/3, w/3, h/3)
        fill( shiftHue(c2[i], .5) )
        rect(x+w+skip + w/3, y + h/3 + h/3, w/3, h/3)
        fill( shiftHue(c2[i], .8) )
        rect(x+w+skip + w/3 + w/3, y + h/3 + h/3, w/3, h/3)


        fill('#ffffff')
        font('20px moon')
        alignLeft()
        baseTop()
        text(c1[i].toUpperCase(), x, y + 3)

        const c = color2RGBA(c1[i])
        const r = c[0].toString(16)
        const g = c[1].toString(16)
        const b = c[2].toString(16)
        text(r + ',' + g + ',' + b, x, y + 25)

        x += 2*w + pad
        if (x >= ctx.width - border - 2*w) {
            y += h + pad
            x = border
        }
    }
}
