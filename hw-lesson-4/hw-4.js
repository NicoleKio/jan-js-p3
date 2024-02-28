// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б / S = a ⋅ b

function calc(a, b) {
    return a * b;
}

console.log(calc(23, 67));



// - створити функцію яка обчислює та повертає площу кола з радіусом r / S = π r2

function calc2(r) {
    const Pi = 3.14;
    return Pi*r*2
}

console.log(calc2(50));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r / S = 2πRH

function calc3(r, h) {
    const Pi = 3.14;
    return 2*Pi*r*h;
}

console.log(calc3(20, 10));



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

function group(arr) {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}
group(people);



// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function doc(text) {
    document.write(`<p>${text}</p>`)
}

doc('Okten is the best!')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function fLi(textLi) {
    document.write(
        `
        <ul>
            <li>${textLi}</li>
            <li>${textLi}</li>
            <li>${textLi}</li>
        </ul>
        `
    )
}

fLi('Have a nice day!')



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function loopLi(textLi2, num) {
    document.write(`<ul>`)


      for (let i = 0; i <`${num}`; i++){
        document.write(` <li>${textLi2}</li> `)
    }
      document.write(`</ul>`);

}

loopLi('Lorem 123', 3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [1, 'Chara', 568, false, 'Doloria', 'Lacus', 87, true, false, 19]

function listForArray(item) {
    document.write(`<ol>`)

    for (let itemElement of item) {
        document.write(`<li>${itemElement}</li>`)
    }
    document.write(`</ol>`);
    }

listForArray(array);



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let usersIdArray = [
    {id: 0, name: 'Ray', age: 20},
    {id: 1, name: 'Luise', age: 14},
    {id: 2, name: 'Lacus', age: 19},
    {id: 3, name: 'Chess', age: 18},
];


function docArr(arrId) {

    for (let arrIdElement of arrId) {

        document.write(`<div>${arrIdElement.id} ${arrIdElement.name} ${arrIdElement.age} </div>`);
        //
        // document.write(`<div>`)
        //
        // for (let arrIdElementKey in arrIdElement) {
        //     document.write(`${arrIdElementKey} - ${arrIdElement[arrIdElementKey]}, `)
        // }
        // document.write(`</div>`)
    }
}

docArr(usersIdArray);




// - створити функцію яка повертає найменьше число з масиву

let numArr = [652, 864, 5, 4, 686, 2, 937]

function minNum(arrNum) {

    for (let i = 1; i < arrNum.length; i++) {

        let num1 = arrNum[0];
        let num2 = arrNum[i];
        if (num1 > num2){
            num1 = num2;
        }


        console.log(num1, num2)
    }

}
(minNum(numArr))






// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13












// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]



// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250