
//-------------------------------------------------- ФУНКЦІОНАЛЬНИЙ ВИРАЗ --------------------------------------------------------

let greeting = function () {
    console.log('Hi')
}

greeting();



// при декларуванні чистої ф відбувається ХОСТІНГ, вони можуть декларуватися у будь якому місці, бо вспливають)
// коли виводимо вираз - ми оголошуємо змінну. А змінні неможливо вивести до того, як вони будуть оголошені



//-------------------------------------------------- СТРІЛОЧНІ ФУНКЦІЇ ----------------------------------------------------

function calc(a, b) {
    return a + b;
}

console.log(calc(12, 15));


let calc2 = (q, w) => q + w;
console.log(calc2())

















