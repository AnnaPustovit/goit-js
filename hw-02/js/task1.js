'use strict';

console.log('Task 1');

const logItems = function(array) {
  for (let i = 0; i < logItems.length; i += 1) {
    console.log(`(logItems.indexOf([])+1), logItems[i]`);
  }
};
console.log(logItems, ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

console.log(logItems, [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
