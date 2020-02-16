'use strict';

console.log('Task 2');

const countProps = function(obj) {
  let counter = 0;

  for (const key in obj) {
    counter++;
  }

  console.log('Всего свойств: ' + counter);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
countProps({}); // 0

countProps({ name: 'Mango', age: 2 }); // 2

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3
