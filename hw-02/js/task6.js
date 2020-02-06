'use strict';

console.log('Task 6');

let input;
let total = 0;
const arr = [];

do {
  input = prompt('Please enter a number');

  if (Number.isNaN(Number(input))) {
    console.log('Было введено не числол, поробуйте снова');
  } else {
    arr.push(Number(input));
  }
} while (input !== null && input !== '');

arr.forEach(number => {
  total += number;
});

console.log(`Общая сумма чисел равна ${total}`);
