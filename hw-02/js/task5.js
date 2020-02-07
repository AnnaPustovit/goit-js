'use strict';

console.log('Task 5');
let i;

// const checkForSpam = function(message) {
//   let arrStr = message.toLowerCase().split(' ');

//   for (i = 0; i < arrStr.length; i += 1) {
//     let word = arrStr[i];
//     if (word.includes('spam') || word.includes('sale')) {
//       return true;
//     }
//   }
//   return false;
// };
const checkForSpam = function(message) {
  let arrStr = message.toLowerCase().split(' ');

  for (i = 0; i < arrStr.length; i += 1) {
    let word = arrStr[i];
    return word.includes('spam') || word.includes('sale');
  }
  return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
