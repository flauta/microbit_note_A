input.onButtonPressed(Button.A, function () {
    nota += 1
    if (nota > 6) {
        nota = 0
    }
    basic.showString("" + (nomi_note[nota]))
})
input.onButtonPressed(Button.B, function () {
    valore += 1
    if (valore > 3) {
        valore = 0
    }
    disegna_valore(valore)
})
function disegna_valore (fig: number) {
    valori[fig].showImage(0)
}
let valore = 0
let valori: Image[] = []
let nomi_note: string[] = []
let nota = 0
nota = -1
nomi_note = [
"a",
"b",
"c",
"d",
"e",
"f",
"g"
]
valori = [
images.createImage(`
    . . . . .
    . . . . .
    . # # . .
    # . . # .
    . # # . .
    `),
images.createImage(`
    . . . # .
    . . . # .
    . # # # .
    # . . # .
    . # # . .
    `),
images.createImage(`
    . . . # .
    . . . # .
    . # # # .
    # # # # .
    . # # . .
    `),
images.createImage(`
    . . # . .
    . . # # .
    . # # . #
    # . # . .
    . # . . .
    `)
]
