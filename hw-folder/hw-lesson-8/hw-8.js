// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let users = [
    new User(1, 'Doloria', 'Ovel-Kont', 'dok@gmail.com', '+380992640523' ),
    new User(2, 'Caroline', 'Ritesski', 'crt@gmail.com', '+380992640678' ),
    new User(3, 'Lacus', 'Wiagarti', 'lwg@gmail.com', '+380992640576' ),
    new User(4, 'Yukisa', 'Kio', 'yks@gmail.com', '+380992640741' ),
    new User(5, 'Chess', 'Bonyfoger', 'cgf@gmail.com', '+380992640787' ),
    new User(6, 'Ray', 'Senttolomew', 'rsm@gmail.com', '+380992645261' ),
    new User(7, 'Adelaide', 'de Azu', 'ada@gmail.com', '+380992644436' ),
    new User(8, 'Vi', 'Orysse', 'vos@gmail.com', '+380992640999' ),
    new User(9, 'Claude', 'Ovel-Kont', 'cok@gmail.com', '+380992640965' ),
    new User(10, 'Luise', 'Wiagarti', 'lwt@gmail.com', '+380992649865' ),
]

console.log(users);




// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(user => !(user.id % 2)));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(users.sort((us1, us2) => {return us1.id - us2.id}));
// console.log(users.sort((us1, us2) => {return us2.id - us1.id}));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let clients = [
    new Client(1, 'Doloria', 'Ovel-Kont', 'dok@gmail.com', '+380992640523', ['vial', 'headpiece', 'cello'] ),
    new Client(2, 'Caroline', 'Ritesski', 'crt@gmail.com', '+380992640678', ['milk'] ),
    new Client(3, 'Lacus', 'Wiagarti', 'lwg@gmail.com', '+380992640576', ['violin', 'folio']),
    new Client(4, 'Yukisa', 'Kio', 'yks@gmail.com', '+380992640741', ['vine', 'tiara', 'silver corset']),
    new Client(5, 'Chess', 'Bonyfoger', 'cgf@gmail.com', '+380992640787', ['chess', 'potion', 'syringes', 'probe']),
    new Client(6, 'Ray', 'Senttolomew', 'rsm@gmail.com', '+380992645261', ['clocks', 'masks', 'coffee']),
    new Client(7, 'Adelaide', 'de Azu', 'ada@gmail.com', '+380992644436', ['spiders', 'dress', 'flowers', 'earrings', 'apples']),
    new Client(8, 'Vi', 'Orysse', 'vos@gmail.com', '+380992640999', ['tea', 'chopsticks']),
    new Client(9, 'Claude', 'Ovel-Kont', 'cok@gmail.com', '+380992640965', ['pot']),
    new Client(10, 'Luise', 'Wiagarti', 'lwt@gmail.com', '+380992649865', ['violin', 'needles'])
]

console.log(clients);



// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clients.sort((client1, client2) => {
    return client1.order.length - client2.order.length
}));

console.log(`---------------Constructor---------------`);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, brand, yearReal, maxSpeed, engineCap, driver){
    this.model = model;
    this.brand = brand;
    this.yearReal = yearReal;
    this.maxSpeed = maxSpeed;
    this.engineCap = engineCap;
    this.driver = driver;

    this.drive = function (){console.log(`їдемо зі швидкістю ${maxSpeed} км на годину`)};
    this.info = function (){
        console.log(`модель: ${model}, виробник: ${brand}, рік випуску: ${yearReal}, максимальна швидкість: ${maxSpeed}, об'єм двигуна: ${engineCap}`)};

    this.increaseMaxSpeed = function (newSpeed){
        maxSpeed = this.maxSpeed + newSpeed;

    this.changeYear = function (newValue){
        yearReal = newValue;
    }

    this.addDriver = function (name, age) {
        let driverMan = {name, age}
            this.driver = [];
            this.driver.push(driverMan)
    }
    }
}


let car1 = new Cars('i8','BMW', 2018, 250, 1.5);
console.log(car1)
car1.drive();
car1.increaseMaxSpeed(100);
car1.info()
car1.changeYear(2000)
car1.info()
car1.addDriver('Lola', 20);
car1.info()
console.log(car1)





console.log(`-------------Class-----------------`);
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



class Car2 {
    constructor(model, brand, yearReal, maxSpeed, engineCap) {
        this.model = model;
        this.brand = brand;
        this.yearReal = yearReal;
        this.maxSpeed = maxSpeed;
        this.engineCap = engineCap;
    }
}

let car2 = new Car2('i8','BMW', 2018, 250, 1,5);
console.log(car2);



class CarAdd extends Car2 {
    constructor(...add) {
        super(...add)
        this.drive = function (){console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    }
}}

let newAddCar = new CarAdd('i8','BMW', 2018, 250, 1,5);
newAddCar.drive();






// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку