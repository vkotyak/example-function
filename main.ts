input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= a - 1; index++) {
        y = 4
        while (y >= a - arr[index]) {
            led.plot(index, y)
            y += -1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    fillArray(a, 5)
    basic.clearScreen()
})
function fillArray (size: number, max: number) {
    for (let index = 0; index <= size; index++) {
        arr[index] = randint(1, max)
    }
    return 1
}
let y = 0
let arr: number[] = []
let a = 0
a = 5
arr = []
fillArray(a, 5)
