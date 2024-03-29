
//------------------------------------------------------ ФУНКЦІЇ --------------------------------------------------------

// можливість запакувати код, який буде повторюватися в майбутньому
// для прописання різних данних в ф використовуються аргументи - назви змінних

//       і'мя  аргумент
function writer(surname, name, gender) {
    document.write(
        `<div> 
            <h2>${surname}</h2>
            <p>${name}</p>
            <p>${gender}</p>
        </div>`
    );
}

writer('Kio', 'Yukisa', 'female');
writer('Bonyfoger', 'Chess', 'female');
writer('Wiagarti', 'Lacus', 'male');



// створюємо ф, яка буде ітерувати кажен новий масив за допомогою циклу

function printerArray(array) {

    for (const item of array) {
        console.log(item.name)

    }
}
let people = [
    {name: 'Caroline', age: 24, status: false},
    {name: 'Amanda', age: 36, status: false},
    {name: 'Eric', age: 20, status: true},
    {name: 'Monalyne', age: 16, status: true},
    {name: 'Lyam', age: 22, status: true},
    {name: 'Joseph', age: 39, status: false},
    {name: 'Beatrice', age: 19, status: true},
]
let agels = [
    {name: 'Yukisa', age: 18, status: true},
    {name: 'Lacus', age: 19, status: true},
    {name: 'Chess', age: 19, status: true},
    {name: 'Lilith', age: 27, status: false},
    {name: 'Seraph', age: 32, status: false},
    {name: 'Hran', age: 35, status: false},
    {name: 'Aqcert', age: 22, status: false},
    {name: 'Doloria', age: 34, status: false},
    {name: 'Vitold', age: 43, status: false},
    {name: 'Claude', age: 26, status: true},]

printerArray(agels);
printerArray(people);




//-------------------------------------------------- ФУНКЦІЇ З RETURN --------------------------------------------------------------------

// ми повинні використовувати результати ф
// з ф це не взяти бо всі змінні в ній локальні
// і ми не кажемо ф повернути результат в місце виклику, це робить оператор return


function calc(a, b) {
    let result = a + b;
    return result;

}


let r1 = calc(34, 32);       // переприсвоїли ф нову назву і запакували в змінну
let r2 = calc(38, 32);
console.log(r1, r2);               // виводимо змінні, в яких запакована наша ф - щаблон


console.log(calc(89, 5))



// ВАРІАНТ 1 -----------

// function commission(sum) {
//     let siteComm = sum / 100 * 50;
//     let companyComm = sum / 100 * 25;
//     let inFact = sum - siteComm - companyComm;
//     return inFact;
//
// }
//
// let salary = commission(50000);
// console.log(salary);



// ВАРІАНТ 2 ------------------

// function commission(sum) {
//     let siteComm = sum / 100 * 50;
//     let companyComm = sum / 100 * 25;
//     return sum - siteComm - companyComm;
//
// }
//
// let salary = commission(50000);
// console.log(salary);


//ВАРІАНТ 3 -----------------

function altCalc(cash, per) {                      // скоротили ф однакові
    return cash/100*per;
}

// function commission(sum) {                           //аргументом для ф може слугувати аргумент іншої ф
//     let siteComm = altCalc(sum, 50 );
//     let companyComm = altCalc(sum, 25);
//     return sum - siteComm - companyComm;
//
// }


function commission(sum) {                                           // ГОСПОДИ ПРОСТИ, ВАРІАНТ 4, в оператор вставляємо просто дії
    return sum - altCalc(sum, 50 ) - altCalc(sum, 25);

}

let salary = commission(100000);
console.log(salary);




//------------------------------------------------- ПСЕВДОМАСИВ У ФУНКЦІЯХ ---------------------------------------------------------

// Ф починає називатися методом коли вона знаходиться в межах класу
// arguments не обмежує кількість можливих значень і тепер їх не треба декларувати

function example() {
    if (arguments.length === 2){
        return arguments[0] + arguments[1];
    }else if (arguments.length === 3){
        return arguments[0] + arguments[1] + arguments[2];
    }

}

console.log(example(54, 665, 111));
console.log(example(10, 15));





//---------------------------------------------------- REST ARGUMENTS ----------------------------------------------------------------

// можливість мати ф з навиначеної к-стю аргументів
// rest argument - масив, бо arguments - псевдомасив
// може бути лише останнім аргументом

function fff(w, ...x) {
    console.log(x);
    console.log(Array.isArray(x));

}

fff(1, 565, 'fgdk', 496)



