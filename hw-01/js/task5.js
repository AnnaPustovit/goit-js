/* eslint-disable strict */

'use strict';

console.log('Task 5');

const CHINA = 1;
const CHILI = 2;
const AUSTRALIA = 3;
const INDIA = 4;
const JAMAIKA = 5;

const label = `Выберите страну доставки: ${CHINA} - Китай , ${CHILI} - Чили , ${AUSTRALIA} - Австралия, ${INDIA} - Индия , ${JAMAIKA} - ямайка `;

let userChoise = prompt(label);
let message;
let price;

console.log(userChoise);

if (userChoise === null) {
  message = 'В вашей стране доставка не доступна';
  console.log(message);
} else {
  userChoise = Number(userChoise);

  switch (userChoise) {
    case CHINA:
      price = 100;
      message = `Доставка в ${userChoise} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case CHILI:
      price = 250;
      message = `Доставка в ${userChoise} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case AUSTRALIA:
      price = 170;
      message = `Доставка в ${userChoise} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case INDIA:
      price = 80;
      message = `Доставка в ${userChoise} будет стоить ${price} кредитов`;
      console.log(message);
      break;

    case JAMAIKA:
      price = 120;
      message = `Доставка в ${userChoise} будет стоить ${price} кредитов`;
      console.log(message);
      break;
  }
}
