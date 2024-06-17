// Напишите функцию, которая принимает
// массив с числами и увеличивает каждое
// число из массива на 10 процентов

function arrays(arr) {

    return arr.map(item1 => item1 * 1.1)
}
let exampe1 = [1, 2, 3]
let exampe2 = [4, 24, 450]

console.log(arrays(exampe1))
console.log(arrays(exampe2))

