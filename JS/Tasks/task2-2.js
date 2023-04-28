const a = prompt("Введите значение A")
const b = prompt("Введите значение B")
const c = prompt("Введите значение C")


if (a > b) {
    if (a > c) {
        console.log("Most value A: " + a)
    }
    else {
        console.log("Most value C: " + c)
    }
      
} else if (b > c) {
    console.log("Most value B: " + b)
    }
    else {
        console.log("Most value C: " + c)
    }
