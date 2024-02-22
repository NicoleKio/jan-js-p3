// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let s1 = 'hello';
let s2 = 'owu';
let s3 = 'com';
let s4 = 'ua';
let s5 = 1;
let s6 = 10;
let s7 = -999;
let s8 = 123;
let s9 = 3.14;
let s10 = 2.7;
let s11 = 16;
let s12 = true;
let s13 = false;

console.log(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13);




// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)


let fname = 'Anastasia';
let mname = 'Anatoliivna';
let lname = 'Martynchik';

let person = `${fname} ${mname} ${lname}`
console.log(person);



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);



// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let enterName = prompt('Enter your name', '');
console.log(enterName);
let enterName2 = prompt('Enter your middle-name', '');
console.log(enterName2);
let enterAge = prompt('Enter your age', '');
console.log(enterAge);
