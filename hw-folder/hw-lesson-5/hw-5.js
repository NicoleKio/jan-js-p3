//
// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б / S = a ⋅ b

const calcS = (a, b) => a * b;
console.log(calcS(11, 10))



// - створити функцію яка обчислює та повертає площу кола з радіусом r / S = π r2

const Pi = 3.14;
const calcS2 = r => Pi * r *  2;
console.log(calcS2(50, 66));



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r / S = 2πRH

const calcS3 = (r, h) => 2 * Pi * r * h;
console.log(calcS3(45, 95));


// - створити функцію яка приймає масив та виводить кожен його елемент

let people = [
    {name: 'Caroline', age: 24, status: false},
    {name: 'Amanda', age: 36, status: false},
    {name: 'Eric', age: 20, status: true},
    {name: 'Monalyne', age: 16, status: true},
    {name: 'Lyam', age: 22, status: true},
    {name: 'Joseph', age: 39, status: false},
    {name: 'Beatrice', age: 19, status: true},
]

const arrOfPeople = (arr) => {
    for (let arrElement of arr) {
        console.log(`name - ${arrElement.name}, age - ${arrElement.age}, status - ${arrElement.status}`)
    }
}

arrOfPeople(people);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const textS = liText => {
    document.write(`<p>${liText}</p>`)

}
textS('Paradise for Nothing')




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulList = textLi2 => {
    document.write(`<ul>
                        <li>${textLi2}</li>
                        <li>${textLi2}</li>
                        <li>${textLi2}</li>
                   </ul>`)
}

ulList('Text Kio')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const ulList3 = (item, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

ulList3('Adelaide de Azu', 3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [53, 'Claude', 'Chess', 5, false, true, 88, 'Elsa']

const arrList = mainArr => {
    document.write(`<ol>`)
    for (let mainArrElement of mainArr) {
        document.write(`<li>${mainArrElement}</li>`)
    }
    document.write(`</ol>`)
}

arrList(array)



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 0, name: 'Ray', age: 20, status: false},
    {id: 1, name: 'Luise', age: 14, status: false},
    {id: 2, name: 'Lacus', age: 19, status: true},
    {id: 3, name: 'Chess', age: 18, status: true},
];

const usersArr = arr => {
    for (let arrElement of arr) {
        document.write(`<div> id - ${arrElement.id}, name - ${arrElement.name}, age - ${arrElement.age}</div>`)
    }
}

usersArr(users)



// - створити функцію яка повертає найменьше число з масиву

let arrOfNums = [88, 21, 19, 8, 356, 1000, 5, 82]

const minFun = arr => {

    let mainItem = arr[0];
    for (let arrElement of arr) {
        if (mainItem > arrElement){
            mainItem = arrElement
        }
    }
    return mainItem;
}

console.log(minFun(arrOfNums))



// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = arr => {

    let sumIt = 0;
    for (let arrElement of arr) {
        sumIt = sumIt + arrElement

    }
    return sumIt
}


console.log(sum([10, 50, 40]))



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {

    let el1 = arr[index1];
    let el2 = arr[index2];

    arr[index1] = el2;
    arr[index2] = el1;
    return arr
};


console.log(swap([11, 22, 33, 44], 0, 1))




// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {

    for (const numC of currencyValues) {
        if (numC.currency === exchangeCurrency) {
            return sumUAH / numC.value
        }
    }
}

console.log(exchange(10000,
    [{currency: 'USD', value: 40},
        {currency: 'EUR', value: 42}],
    'USD'));













