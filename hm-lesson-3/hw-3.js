//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

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
for (let i = 0; i < usersPassword.length; i++) {
    const usersPasswordElement = usersPassword[i];
    document.write(`<div>User ${usersPasswordElement.name} has nickname ${usersPasswordElement.username}</div>`)
}


document.write(`<h3>-----------------------------------------------</h3>`)




// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let usersPassword2 = [
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
for (let i = 0; i < usersPassword2.length; i++) {
    const usersPasswordElement2 = usersPassword2[i];
    document.write(`<div>${i}. User ${usersPasswordElement2.name}</div>`)
}

document.write(`<h3>----------------------------------------</h3>`)





// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let people1 = [
    {name: 'Caroline', age: 24, status: false},
    {name: 'Amanda', age: 36, status: false},
    {name: 'Eric', age: 20, status: true},
    {name: 'Monalyne', age: 16, status: true},
    {name: 'Lyam', age: 22, status: true},
    {name: 'Joseph', age: 39, status: false},
    {name: 'Beatrice', age: 19, status: true},
    {name: 'Caroline', age: 24, status: false},
    {name: 'Amanda', age: 36, status: false},
    {name: 'Eric', age: 20, status: true},
    {name: 'Monalyne', age: 16, status: true},
    {name: 'Lyam', age: 22, status: true},
    {name: 'Joseph', age: 39, status: false},
    {name: 'Beatrice', age: 19, status: true},
    {name: 'Caroline', age: 24, status: false},
    {name: 'Amanda', age: 36, status: false},
    {name: 'Eric', age: 20, status: true},
    {name: 'Monalyne', age: 16, status: true},
    {name: 'Lyam', age: 22, status: true},
    {name: 'Joseph', age: 39, status: false},
]

let i = 0;
while (i<people1.length){
    let human1 = people1[i];
    document.write(`<div><h1>${human1.name}</h1></div>`)
    i++;
}

document.write(`<h3>-----------------------------------------------</h3>`)




// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

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
    {name: 'Claude', age: 26, status: true},
    {name: 'Yukisa', age: 18, status: true},
    {name: 'Lacus', age: 19, status: true},
    {name: 'Chess', age: 19, status: true},
    {name: 'Lilith', age: 27, status: false},
    {name: 'Seraph', age: 32, status: false},
    {name: 'Hran', age: 35, status: false},
    {name: 'Aqcert', age: 22, status: false},
    {name: 'Doloria', age: 34, status: false},
    {name: 'Vitold', age: 43, status: false},
    {name: 'Claude', age: 26, status: true},
]

let a = 0;
while (a<agels.length){
    let agel = agels[a];
    document.write(`<div><h1>${a} - ${agel.name}</h1></div>`)
    a++;
}

document.write(`<h3>-----------------------------------------------</h3>`)





// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (const listOfItem of listOfItems) {
    document.write(`<ul>
                           <li>${listOfItem}</li>
                    </ul>`)
}


document.write(`<h3>------------------------------------------</h3>`)












//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років