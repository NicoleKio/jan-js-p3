

//---------------------------------------------------------- ІНКРЕМЕНТ -----------------------------------------------------------------

    // x++;     // постфіксний інкремент х, додає лише 1
    // ++х;     // префіксний інкремент;
    // x+=1;   // х буде вже 2, те саме додавання до значення / гнучкий, може додавати буль яке значення
    //
    // х--;
    // х = х-1;   // - 1, х = 1; Декрементація
    // х -= 1;   // зменшив ще на 1, тепер х=0


//-------------------------------------------------------- ЦИКЛ FOR (ДЛЯ) -----------------------------------------------------------------

// перебирають масиви
// створюємо Ай, яка на першій ітерацції = 0 (або індекс позиції, з якої почитаємо мотати масив)
// вказуємо межі циклу (довжина масиву або довільне число)
// крок циклу (що робим);

let users = [
    {id: 0, name: 'Ray', age: 20, status: false},
    {id: 1, name: 'Luise', age: 14, status: false},
    {id: 2, name: 'Lacus', age: 19, status: true},
    {id: 3, name: 'Chess', age: 18, status: true},
];


           //Ай           межі      що робим
    for (let i = 0; i < users.length; i++){
    console.log(users[i]);
    }


for (let i = 0; i<users.length; i++){
    document.write(`<div> user info - ${users[i].name} </div>`);          // будує блоки по довжині масиву + Ай
}


//можна скоротити, надавши Ай ім'я (запакувавши в змінну);
for (let i = 0; i<users.length; i++) {
    let nameForI = users[i];
    document.write(`<div> user info - ${nameForI.name} </div>`);
}





//---------------------------------------------------------- ЦИКЛ FOR OF -------------------------------------------------

// той самий for, але тепер Ай з ім'ям і все автоматично послідовно перебирається, без прописання умови

    for (let user of users){
        console.log(user);
    }



//---------------------------------------------------- ЦИКЛ FOR IN ---------------------------------------------------------------

//бере об'єкт як асоціативний масив і витягує назву кожеого поля

let userY = {
    id: 1,
    name: 'Yukisa',
    status: true,
}

for (let fieldName in userY){
    console.log(fieldName);
}


// щоб передати назву поля треба звернутися до імені Ай

for (let fieldName in userY){
    console.log(userY[fieldName]);
}


// значення і назва поля

for (let fieldName in userY){
    console.log(fieldName, userY[fieldName]);
}



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

]
for (const usersPasswordElement of usersPassword) {
    for (const usersPasswordElementKey in usersPasswordElement) {
        console.log(usersPasswordElementKey, usersPasswordElement[usersPasswordElementKey])
    }
    console.log('');
}



//----------------------------------------------------- ЦИКЛ WHILE -------------------------------------------------------------------

// те саме, що і фор, але інша синтаксична конструкція


let people = [
    {name: 'Caroline', age: 24, status: false},
    {name: 'Amanda', age: 36, status: false},
    {name: 'Eric', age: 20, status: true},
    {name: 'Monalyne', age: 16, status: true},
    {name: 'Lyam', age: 22, status: true},
    {name: 'Joseph', age: 39, status: false},
    {name: 'Beatrice', age: 19, status: true},
]

let i = 0;
while (i<people.length){

    // let human = people[i];
    // console.log(human);
    // i++;
}















