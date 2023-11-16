// Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, и Гипотенуза C. 
// Программа проверяет по теореме Пифагора эти стороны треугольника и пишет в консоль "Это прямоугольный треугольник!" или "Это не прямоугольный треугольник!". 
// Используйте if/else для проверки условия.

const a = prompt('Введите катет А')
const b = prompt('Введите катет B')
const c = prompt('Введите гипотенузу C')


if (c ** 2 === a ** 2 + b ** 2) {
    alert('Это прямоугольный треугольник!')
  } else {
    alert('Это не прямоугольный треугольник!')
  }