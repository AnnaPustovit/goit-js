'use strict';

console.log('Task 5');

let input;
let total = 0;

while (input !== null) {
  input = prompt('Введите число');
  if (Number.isNaN(Number(input))) {
    console.log('Вы ввели не число, повторите попытку');
  } else {
    total += Number(input);
  }
}

console.log(`Общая сумма чисел равна ${total}`);
