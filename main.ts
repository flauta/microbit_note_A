input.onButtonPressed(Button.A, function () {
    nota += 1
    if (nota > 6) {
        nota = 0
    }
    basic.showString("" + (text_list[nota]))
})
let text_list: string[] = []
let nota = 0
nota = -1
text_list = [
"a",
"b",
"c",
"d",
"e",
"f",
"g"
]
