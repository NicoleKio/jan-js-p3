
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
console.log(calc2(45, 10));


// let asd = () => console.log(arguments);            //в стрілочних не існує arguments
// console.log(asd());




//---------------------------------------------------- THIS ---------------------------------------------------------------

// референс на об'єкт

let user = {
    name: 'Lilith',
    age: 27,
    greeting2: function (msg) {
        return `${msg}, my name is ${this.name}`
    },
    alsoGreet: (msg) => `${msg}, my age is ${user.age}`
    // в стрілочних контекст this втрачається, бо стрФ посилається на глобальний ел. window
}
console.log(user.greeting2('Greetings'));
console.log(user.alsoGreet('Additionally'))














