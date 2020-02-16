'use strict';

console.log('Task 4');

const countTotalSalary = function(employees) {
  let total = 0;
  for (const key in employees) {
    console.log(employees[key]);

    total += employees[key];
  }
  console.log('total:', total);
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
countTotalSalary({}); // 0

countTotalSalary({
  mango: 100,
  poly: 150,
  alfred: 80,
}); // 330

countTotalSalary({
  kiwi: 200,
  lux: 50,
  chelsy: 150,
}); // 400
