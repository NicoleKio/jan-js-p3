
// ----------------------------------------------------- МАСИВИ ---------------------------------------------------------------

let arr = [ 12, 343, 565, 23];  // 0, 1, 2, 3 - індекси
console.log(arr);

console.log(arr[0]); // 12
console.log(arr.length)  // довжина масиву

arr[0] = 'Agafonika'; // перевизначення
console.log(arr);

arr[4] = 'Adelaide';
console.log(arr);  // додавання елементів вручну

arr[arr.length] = 'Akhzert'; // додати щось в якості останнього елемента в масиві
console.log(arr);



// ----------------------------------------------- БАГАТОВИМІРНІ МАСИВИ -----------------------------------------------------

// масив в масиві

let arr2 = [
    [11, 22, 33],   // 0
    [],             // 1
    [],             // 2
];

console.log(arr2);
let innerArray = arr2[0];
console.log(innerArray[1]);


console.log(arr2[0][2]); // витягнули 33 з 1го масиву



//----------------------------------------------------- ОБ'ЄКТИ -----------------------------------------------------------------

let user1 = {
    // характеристика: значення (ключ, field, property)
    id: 1,
    name: 'Yukisa',
    age: 18,
    skills: ['html', 'java', 'js'],  // 0, 1, 2
    friend: {
        name: 'Chess',
        age: 18,
    }
}
console.log(user1);

console.log(user1.name);  // виведе конкретне поле з об'єкту
console.log(user1['age']);
console.log(user1['name']);

console.log(user1.skills);
console.log(user1.skills[2]); // звернулись до юзера -> ячейка skills -> витягнули скіл з індексом 2 = js

console.log(user1.friend);
console.log(user1.friend.name);  // додаємо індекси в [ ], назви характеристик через крапку




// ----------------------------------------------------- МАСИВИ З ОБ'ЄКТАМИ -----------------------------------------------

let users = [
    {id: 0, name: 'Ray', age: 20, status: false, skills: ['html', 'java', 'js']},           // 0
    {id: 1, name: 'Luise', age: 14, status: false},         // 1
    {id: 2, name: 'Lacus', age: 19, status: true},          // 2
    {id: 3, name: 'Chess', age: 18, status: true},          // 3
];
console.log(users);
console.log(users[0].age);  // вернулися до індексу об'єкта, потім до характеристики

let user0 = users[0];      // або даємо псевдонім та вертаємось через нього (запаковуємо в ярличок)
console.log(user0.name);

console.log(users[0].skills[1]);


// можна витягувати з масива конкретний об'єкт і пакувати в змінну
let skills = user0.skills;
console.log(skills);








