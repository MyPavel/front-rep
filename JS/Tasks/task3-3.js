let neededNumber = 10;
let currentNumber;

do {
  while(currentNumber != neededNumber) {
    currentNumber = prompt('Введите число ' + neededNumber);
  }
  neededNumber *= 2;
} while (currentNumber < 100);
alert('Спасибо!')