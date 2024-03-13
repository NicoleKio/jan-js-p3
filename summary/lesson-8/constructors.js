
//----------------------------------------------------------- ФУНКЦІЇ КОНСТРУКТОРИ ------------------------------------------------------------------
// зазвичай називаємо з великої літери
// нічого не повертає, але вона будує новий об'єкт this
// new каже, що ми будемо створювати НОВУ ячейку в пам'яті

function Constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
    console.log(this)
}

let user1 = new Constructor('Doloria', 39, false);



// існує 2 підходи: КОМПОЗИЦІЯ І АГРЕГАЦІЯ
// v1

function Constructor2(name, age, status, son) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.son = son;
}

let user2 = new Constructor2('Caroline', 23, false, {name: 'Claude', age: 17, status: true});
console.log(user2);


// v2
// описані функції будуть присутні в усіх нових створених конструктором об'єктах
function Constructor3(name, age, status, sonName, sonAge, sonStatus) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.son = {name: sonName, age: sonAge, status: sonStatus};
    this.greeting = function () {
        console.log('Hi');
    }
}

let user3 = new Constructor3('Inesa', 24, false, 'Ray', 20, false);
console.log(user3);

user3.greeting()





//--------------------------------------------------- PROTOTYPE CALL -----------------------------------------------------------------
// якщо існує код чи конструктор, до якого неможливо доступитися, щоб змінити його як шаблон
// prototype дає можливість роширювати функцію-конструктор і дописувати якісь характеристики.


// v1
// створюємо прототип якоїсь характеристики КОНСТРУКТОРА
// тепер будь який об'єкт, створений тим же конструктором буде мати таку ж характеристику

Constructor.prototype.firstSon = function (){
    return `This student is ${this.name}'s child`                   // this буде звертатися до нашого майбутнього об'єкта
}

console.log(user1.firstSon());



let user4 = new Constructor('Amanda', 41, false);
console.log(user4.firstSon())


console.log('----------------------------------------------------')



//---------------------------------------------------------- APPLY -----------------------------------------------------------------
// v2
// apply - функція, яка дозволяє підмінити контекст this
//ПІДМІНА КОНТЕКСТУ навіть з інших конструкторів

console.log(user1.firstSon.apply(user3));
console.log(user1.firstSon.apply(user2));

let user5 = new Constructor3('Vitold', 55, false, 'Hran', 35, false)
console.log(user1.firstSon.apply(user5));

console.log(user5)
console.log(user1)
console.log(user4);

console.log('-----------------------------------------------------')


// створюємо нову характеристику ТІЛЬКИ для ОБ'ЄКТУ Долорія
user1.greet = function (msg) {
    return `${this.name} is ${msg} from Paradise for Nothing`
}

console.log(user1.greet('agel'));
console.log(user1.greet('agel'));
console.log(user4.firstSon().toUpperCase())
console.log(user1.greet.apply(user4, ['human']));
console.log(user1.greet.apply(user3, ['agel']));
console.log(user1.greet.apply(user2, ['human']));

console.log(user1.greet.apply(user5, ['agel']))
console.log(user5)
console.log(user1.firstSon.apply(user5))
console.log(user1.greet.apply(user5, ['agel']))

console.log('-----------------------------------------------------')

// call аналог, але там можна аргументи через кому

console.log(user1.greet.call(user5, 'agel'))
console.log(user1.greet.call(user1, 'agel'))
console.log(user1.greet.call(user2, 'agel'))
console.log(user1.firstSon.call(user2, 'agel'))

console.log('-----------------------------------------------------')

let GreetCopy = user1.greet.bind(user5);
console.log(GreetCopy('HHHHHHH'));

// let GreetCopy2 = user1.greet.bind(user1);
// console.log(GreetCopy2('HHHHHHH'));

let GreetCopy2 = user1.greet.bind(user1, 'HHHHHHH');
console.log(GreetCopy2());


//ИТОХ!!! Якщо створюємо від конструктора прототипом, то всі подальші об'єкти  цього конструктора зможуть юзати створену характеристику.
// Якщо від об'єкта, то це характеристика тільки на об'єкті, іншим лише через apply


