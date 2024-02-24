

// порівнює випадки / ключі
// ключ відкриває певний кейс


let color = prompt('enter the color')
switch (color) {
    case "green":
        console.log('do');
        break;

    case 'yellow':
        console.log('wait');
        break;

    case 'red':
        console.log('stop');
        break;

    default:
        console.log('???');
}


// множинна перевірка (if, else if...) краще через switch
// швидка разова перевірка краще через if else



//
//
// let color = prompt('enter the color')
// switch (color) {
//     case "green":                 // множинна перевірка, де треба декілька кейсів
//     case 'yellow':
//         console.log('wait');
//         break;
//
//     case 'red':
//         console.log('stop');
//         break;
//
//     default:
//         console.log('???');
// }









