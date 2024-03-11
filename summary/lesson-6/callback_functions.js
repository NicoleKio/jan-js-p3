//------------------------------------------------------ ФУНКЦІЇ МАСИВІВ З КОЛБЕКАМИ --------------------------------------------------------

let users = [{id: 0, name: 'Ray', age: 20, status: false}, {id: 1, name: 'Luise', age: 14, status: false}, {
    id: 2,
    name: 'Lacus',
    age: 19,
    status: true
}, {id: 3, name: 'Chess', age: 18, status: true},];


//--------------------------------------------------------- ІТЕРАЦЯ ---------------------------------------------------------------
// forEach - метод, який має аргумент під псевдонімом callback. Передає в окрему ітерацію кожен об'єкт з масиву. Виконає щось для кожного елементу.
// callback являється функцією, у неї є аргументи: value, index, array. Вона сама нічоно не повертає. Це псевдонім аргументу.
// всередину треба передавати функцію, яка буде приймати 3 об'єкти: value, index, array.

users.forEach(function (value) {
    console.log(value);
})
//----------------------

//ітерація, об'єкт        дія з ним
users.forEach(value => console.log(value));


//------------------------------------------------------------ ФІЛЬТРАЦІЯ ----------------------------------------------------------
// filter повертає булеве значення. Ми виставляємо протокол по якому треба акцептувати чи ні наш об'єкт.
// Якщо приймаємо об'єкт, він потрапить у НОВИЙ МАСИВ, який буде повернений в кінці.
// АКЦЕПТ - прийняття.
// початковий масив буде не зміненим

let filteredUsers = users.filter(function (value) {
    return value.age > 19;
})
console.log(filteredUsers);

//-------------------------

//   змінна      фільтрація   об'єкт    умова
let usersFilt = users.filter(value => value.age > 18);
console.log(usersFilt)                                            // результат в масиві

console.log(users)


//--------------------------------------------------------- MAP ---------------------------------------------------------
// повертає НОВИЙ ОБ'ЄКТ.
// мапує наш об'єкт з масиву до якогось нового масиву.
// тобто можемо проітерувати масив, взяти об'єкт з нього та додати щось / на основі старого зробити новий

// let mapedUsers = users.map(function (value, index) {
//
//     let newUser = {
//         name: value.name,
//         age: value.age,
//         status: value.status,
//         id: index + 1
//     }
//
//     return newUser;
// })
//
// console.log(mapedUsers);


let mapedUsers = users.map(function (value, index) {

        return {
        name: value.name,
        age: value.age,
        status: value.status,
        id: index + 1
    };
});

console.log(mapedUsers);


// стрілочною ------------------------------------------

// users.map((value, index) =>
//         return {id: index+1, name: value.name, age: value.age, status: value.status})
//



//----------------------------------------------- МЕТОД FIND ----------------------------------------------------
// знаходить елементи по відповідності, але ТІЛЬКИ ПЕРШЕ ВХОДЖЕННЯ

// назва нов мас   метод     умова
let userChess = users.find(value => value.name === 'Chess')
console.log(userChess);



//--------------------------------------------- ФУНКЦІЯ EVERY ----------------------------------------------------
//виконує колбек, беручи елемент з масиву і перевіряє чи у КОЖНОГО елементу певна характеристика одинакова

let everyUsers = users.every(value => value.status === true);
console.log(everyUsers);



//------------------------------------------------- SOME ---------------------------------------------------------
//майже те саме, але перевіряє чи хоча б якийсь елемент в масиві має ту чи іншу характеристику

console.log(users.some(value => value.age === 19));



//--------------------------------------------------- SORT ---------------------------------------------------
//фукнція, яка приймає колбеки і сортує щось
// бере пару об'єктів, порівнює підмінюючи,

let usersPassword = [
    {name: "Ray", username: "Wonder", password: 55387, age: 20},
    {name: "Luise", username: "Martagon flower", password: 958677, age: 14},
    {name: "Naiigrym", username: "Iudex", password: 956326, age: 46},
    {name: "Adelaide", username: "Ada's mavka", password: 7474387, age: 2000},
    {name: "Yukisa", username: "Mistress", password: 38756968, age: 18},
    {name: "Lacus", username: "Reaper of death", password: 4493948, age: 19},
    {name: "Doloria", username: "Ms. Owel-Kont", password: 8655345, age: 38},
    {name: "Elia", username: "Mad Hatter", password: 616865, age: 35},
    {name: "Aqcert", username: "Joker", password: 111186, age: 23},
    {name: "Sophy", username: "Acolyte", password: 2275999, age: 29},

]
//
// let usersSort = usersPassword.sort((a, b) => {
//     console.log(a, b)
// })


// порівняння за зростанням / важчий об'єкт пірнає вниз

let usersSort = usersPassword.sort((us1,us2) => {
    return us1.age - us2.age;
})

console.log(usersSort);

console.log(usersPassword === usersSort);

// порівняння за спаданням
let usersSort2 = usersPassword.sort((us1,us2) => {
    return us2.age - us1.age;
})

console.log(usersSort2);


// сортування по імені -------------------------------
// сортує по алфавіту по аскікодам

let sortName = usersPassword.sort((a, b) => {
    if (a.name > b.name){
        return 1;
    }
    if (a.name < b.name){
        return -1;
    }
    if (a.name === b.name){
        return 0;
    }
})

console.log(sortName);



//---------------------------------------------------- МЕТОД REDUCE ---------------------------------------------------------
// зменшувач чогось, компонування, перепакування елементів. Формує НОВИЙ МАСИВ.
// має приймати колбек(2 аргументи) і масив. Треба попередньо визначити як бажаємо запакувати отримані дані.
// тобто можемо міняти формат нашого масиву


//            ітерація   пустий м      елемент з нашого масиву
// usersPassword.reduce((previousValue, currentValue) =>{
//     console.log(previousValue, currentValue)

//}, []);   // той пустий масив /ячейка, в яку щось додаємо / може бути чим завгодно, але в неї буде все акумулюватися



 let reduceUs = users.reduce((accumulator, user) => {
    if (user.status){                                   // === true
        accumulator.statT.push(user);                   // пушимо відповідний елемент в певну ячеййку
    } else {
        accumulator.statF.push(user);
    }
    return accumulator;                   // пустий масив заміняємо на новий

},  {statT:[], statF:[]});


console.log(reduceUs)











