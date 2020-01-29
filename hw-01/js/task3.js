/* eslint-disable strict */

'use strict';

console.log('Task 3');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Please enter your password');

if (password === null) {
  message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
console.log(message);
