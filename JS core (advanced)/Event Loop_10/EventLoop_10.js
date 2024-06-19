// Напишите функцию, которая принимает
// callback функцию и вызывает ее после
// задержки в 2 секунды


function delayCallback(callback) {
    setTimeout(callback, 2000)
  }
  
  
  delayCallback(() => {
    console.log('Callback executed after 2 seconds')
  })
  