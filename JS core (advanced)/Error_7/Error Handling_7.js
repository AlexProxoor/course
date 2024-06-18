// Напишите функцию, которая принимает
// число в качестве параметра и выдает
// пользовательскую ошибку, если число не
// является целым числом


function numInt(n) {

    if (n % 1 !== 0) {
        throw new Error('Error! Number is not integer!')
    }
    console.log('Number is integer!')
}

try {
    numInt(1)
    numInt(1.1)

}
catch (e) {

    console.error(e.message)
}
