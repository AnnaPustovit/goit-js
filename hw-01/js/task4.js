/* eslint-disable strict */

'use strict';

console.log('Task 4');

const credits = 23580;

const pricePerDroid = 3000;

const userChoise = prompt('Сколько дроидов вы хотите заказать?');

let totalPrice;
let yourCredits;

if (userChoise === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = userChoise * pricePerDroid;
  console.log(totalPrice);

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    yourCredits = credits - totalPrice;
    console.log(
      `Вы купили ${userChoise} дроидов, на счету осталось ${yourCredits} кредитов.`,
    );
  }
}

console.log('Спасибо, что посетили наш магазин!');
