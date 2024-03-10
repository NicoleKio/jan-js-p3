

//----------------------------------------------------------- ДАТА ЧА ЧАС --------------------------------------------------------------
// є конструктор дати, який якщо нічого не приймає - то це буде поточний час

let dataNow = new Date();
console.log(dataNow);

// дістає окремо рік/ день/ години/ хвилини і т.п.
console.log(dataNow.getFullYear());
console.log(dataNow.getDay());
console.log(dataNow.getMonth());    // місяць поч з 0
console.log(dataNow.getMinutes());
console.log(dataNow.getTime());      // к-сть мілісекунд з 1 січня 1970го р / початок єпохи обчислення чпсу в системі юнікс

let dataCr = new Date(1987, 0, 30, 12, 30, 50, 0);
console.log(dataCr)




//------------------------------------------------------- ОБРОБКА ПОМИЛОК --------------------------------------------------------------------

console.log('start')
    try{
        console.log(a);
    } catch (e) {
        console.log(e)
    }finally {
        console.log('Kio')
    }

console.log('end')


// function calc (a, b){
//     if (b === 0){
//         throw new Error('b is 0')
//     }
//     return a/ b;
// }
//
// calc(4, 0);
//


//------------------------------------- ОПЕРАТОР ОПЦІОНАЛЬНОЇ ПОСЛІДОВНОСТІ ----------------------------------------------------------------
// ?. перевіряє, що якщо щось не так то далі навіть йти не буде / ахист від потенційно можливих помилок

let userEl = undefined;
userEl?.name?.firstName;




//------------------------------------------------ ДЕСТРУКТУРИЗАЦІЯ ------------------------------------------------------------------
// створюємо характеристики, які будуть брати свої значення з інших змінних

let name = 'Chess';
let age = 18;
let userCh = {
    name,
    age,
    foo() {
        console.log(this)                     // this - це наша змінна об'єкту. з якого ми все беремо
    },
    friend: {
        name: 'Ray',
        age: 20,
    }
}

console.log(userCh)
userCh.foo();





let userYu = {
    nameYu: 'Yukisa',
    ageYu: 18,
    fooYu() {
        console.log('Foo')                     // this - це наша змінна об'єкту. з якого ми все беремо
    }
}



// можна декомпоновувати об'єкти / брати з них що треба і юзати
let {nameYu, ageYu} = userYu;
console.log(nameYu)



// можна з усього об'єкта витягувати щось конкретне
function asd({name}) {
    console.log(name)
}

asd({a: 456, name: 'Lacus'});           // з усієї ф витягнув лише заданий нейм





// можна проголошувати деструктуровані вже декларовані характеристики, переназиваючи їх.

let {name: user2Name, age:user2Age, friend:{name:frName}, friend} = userCh;        //беремо ім'я з Юзера Чесс і переназвавши змінну декларуємо його знову
console.log(user2Name);
console.log(frName);
console.log(friend);


//--------------------------------------------------------
// можна робити деструктуризацію і масиву, притому пропускаючи деякі сегменти

let [a, , c] = [1, 2, 3];
console.log(a, c);


let people = [
    {name1: 'Caroline', age1: 24, status: false},
    {name1: 'Amanda', age1: 36, status: false},
    {name1: 'Eric', age1: 20, status: true},
    {name1: 'Monalyne', age1: 16, status: true},
    {name1: 'Lyam', age1: 22, status: true},
    {name1: 'Joseph', age1: 39, status: false},
    {name1: 'Beatrice', age1: 19, status: true},
]

let [{name1, age1, status}, person2] = people;
console.log(person2);
console.log(name1)



//-------------------------------------------------- SPRED -----------------------------------------------------------
//  допомагає копіювати один об'єкт в інший так, щоб перший не змінювавс
// така копія поверхнева - посилання об'єктів всередині однакові

let userL = {
    name: 'Luise', age: 14,
}

let userAg = {...userL};
console.log(userAg);

let userAd = {...userL, name: 'Adelaide'};
console.log(userAd);




//---------------------------------------------------------- JSON ---------------------------------------------------------------
// - це спосіб передачі інформації, а не поведінки. Глибока повноцінна копія.
// JSON.stringify - перетворює будь що на стрінгове значення
// з нього вирізається увесь функціонал, тобто функції

let newO = JSON.stringify(1234);
console.log(newO);

console.log(JSON.stringify(userAd));


// JSON.parse - реверсивний метод, зі стрінги перетворює на інше значення.
// клон об'єкту, який має овсім інше посилання в пам'яті

let new1 = JSON.parse('1257485');
console.log(new1);



//--------------------------------------------------- OBJECT ASSIGN --------------------------------------------------------------------
// вказуємо куди і що будемо копіювати, поверхневе копіювання

let assign = Object.assign({}, userCh);
console.log(assign);






