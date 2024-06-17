// Напишите функцию, которая многократно
// выполняет заданную операцию через
// фиксированный интервал, используя
// setInterval().


function interval(action, interval, repeat) {
    let count = 0;

    const intervalId = setInterval(() => {
        if (count < repeat) {
            action();
            count++;
        } else {
            clearInterval(intervalId);
        }
    }, interval);
}


const antion1 = () => {
    console.log('Good day!!!');
};
const antion2 = () => {
    console.log('Smile!!!');
};

interval(antion1, 1000, 2);
interval(antion2, 3000, 1);
