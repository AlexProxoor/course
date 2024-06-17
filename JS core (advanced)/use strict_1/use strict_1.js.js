// Напишите функцию для расчета факториала
// числа. Функция должна принимать число в
// качестве аргумента и возвращать его
// факториал. Учтите использование строгого
// режима.


"use strict";

function factorial(n) {
    if (n < 0) {
        throw new Error("Число должно быть неотрицательным");
    }
   
    return (n === 0 || n === 1) ? 1:  n * factorial(n - 1);
}


console.log(factorial(2));  
console.log(factorial(0));  
console.log(factorial(10)); 
