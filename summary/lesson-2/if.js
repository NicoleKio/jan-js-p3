//------------------------------------------------------ ЛОГІЧНІ РОГАЛУЖЕННЯ ----------------------------------------------------


let color = 'green'                         // є колір, якщо значення буде червоний, то виконуємо умову - стоп
if (color === 'red') {
    console.log('stop');

} else {
    console.log('go');
}


// let ageEx = +prompt('Enter your age', '');
// // let numAge = +ageEX;
// console.log(ageEx, typeof ageEx);


//
// let age = +prompt('Enter your age')
// if (age >= 18){
//     console.log('Adult content')
// }else {
//     console.log('Cartoons');
// }




// let color2 = prompt('enter color')
// if (color2 === 'green') {
//     if (confirm('Is road free?')){
//         console.log('go');
//     }else {
//         console.log('just wait');
//     }
//    
//
// } else if (color2 === 'yellow') {
//     console.log('wait');
// } else if (color2 === 'red') {
//     console.log('stop');
// } else {
//     console.log('???');
// }





// && додає умови / || або або

let color2 = prompt('enter color')
let isRoadClear = confirm('Is road free?');
if (color2 === 'green' && isRoadClear) {
        console.log('go');
        
} else if (color2 === 'yellow') {
    console.log('wait');
} else if (color2 === 'red') {
    console.log('stop');
} else {
    console.log('???');
}


