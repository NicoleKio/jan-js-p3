// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = [1, 34, 'okten', true, 956, false, 'owu', 541, 5, 'ua'];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[8]);
console.log(array[9]);




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Paradise for Nothing',
    pageCount: 880,
    genre: 'science fiction'
}

let book2 = {
    title: 'The apple with a rottenness',
    pageCount: 768,
    genre: 'horror'
}

let book3 = {
    title: 'Wolf`s blood for the lamb',
    pageCount: 651,
    genre: 'tragedy'
}
console.log(book1, book2, book3);




// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookN1 = {
    title: 'Paradise for Nothing',
    pageCount: 880,
    genre: 'science fiction',
    authors: [{name: 'N. Kiomaru', age: 28}]
}
console.log(bookN1);


let bookN2 = {
    title: 'The apple with a rottenness',
    pageCount: 768,
    genre: 'horror',
    authors: [{name: 'L. Wiagarti', age: 29}]
}
console.log(bookN2);


let bookN3 = {
    title: 'Wolf`s blood for the lamb',
    pageCount: 651,
    genre: 'tragedy',
    authors: [{name: 'R. Sentolomew', age: 30}]
}
console.log(bookN3);




// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let usersPassword = [
    {name: "Ray", username: "Wonder", password: 55387},
    {name: "Luise", username: "Martagon flower", password: 958677},
    {name: "Naiigrym", username: "Iudex", password: 956326},
    {name: "Adelaide", username: "Ada's mavka", password: 7474387},
    {name: "Yukisa", username: "Mistress", password: 38756968},
    {name: "Lacus", username: "Reaper of death", password: 4493948},
    {name: "Doloria", username: "Ms. Owel-Kont", password: 8655345},
    {name: "Elia", username: "Mad Hatter", password: 616865},
    {name: "Aqcert", username: "Joker", password: 111186},
    {name: "Sophy", username: "Acolyte", password: 2275999},
];

console.log(usersPassword[0]['password']);
console.log(usersPassword[1]['password']);
console.log(usersPassword[2]['password']);
console.log(usersPassword[3]['password']);
console.log(usersPassword[4]['password']);
console.log(usersPassword[5]['password']);
console.log(usersPassword[6]['password']);
console.log(usersPassword[7]['password']);
console.log(usersPassword[8]['password']);
console.log(usersPassword[9]['password']);





// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x1 = 1;
if (x1 !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}


let x0 = 0;
if (x0 !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}


let x3 = -3;
if (x3 !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 50;
if (time >= 0 && time <= 15) {
    console.log('1 частина');
} else if (time >= 16 && time <= 30) {
    console.log('2 частина');
} else if (time >= 31 && time <= 45) {
    console.log('3 частина');
} else if (time >= 46 && time <= 59) {
    console.log('4 частина');
} else {
    console.log('???');
}





// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 12;
if (day >= 1 && day <= 10) {
    console.log('1 декада');
} else if (day >= 11 && day <= 20) {
    console.log('2 декада');
} else if (day >= 21 && day <= 31) {
    console.log('3 декада');
} else {
    console.log('???');
}




// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let day2 = 6;
switch (day2) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

}




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 5646;
let b = 98;
let num1 = a - b;
let num2 = b - a;
if (num1 > num2) {
    console.log(a);
} else if (num2 > num1) {
    console.log(b);
} else if (num1 === num2) {
    console.log(`${a}=${b}`)
}





//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = 5;
console.log( x || 'default')





//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


if (coursesAndDurationArray[0].monthDuration > 5){
    console.log('Cупер')
}

if (coursesAndDurationArray[1].monthDuration > 5){
    console.log('Cупер')
}

if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('Cупер')
}

if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('Cупер')
}

if (coursesAndDurationArray[4].monthDuration > 5){
    console.log('Cупер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Cупер')
}