// Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.



// Вывод нечетных чисел от 0 до 5
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Вывод четных чисел от 5 до 10
for (let j = 5; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}