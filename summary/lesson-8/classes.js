

//-------------------------------------------------- КЛАСИ ТА НАСЛІДУВАННЯ ----------------------------------------------------------
// всередині класу існує конструктор
// генерують майбутній об'єкт, до якого можемо звернутися через this



class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // static
    greeting() {
        return `Hello, my name is ${this.name}`;
    }

}

let user = new User('Yukisa', 18);
console.log(user)
console.log(user.greeting())
// console.log(User.greeting());



//----------------------------------------------------- НАСЛІДУВАННЯ ------------------------------------------------------------
// функція в межах класу називається методом
// extends - розширення класу. Customer розширює User.
// Юзер буде працювати задля кастомера, віддавати своє, розширювати кастомера

class Customer extends User {

    constructor(name, age, password) {
        super(name, age);                  // super = this, але в батьківському класі
        this.password = password;
    }
}

userChild = new Customer('Lacus', 19, 886586);
console.log(userChild)
console.log(userChild.greeting())

console.log('------------------------------------------------------------')



function User2 (name, age){
    this.name = name;
    this.age = age;
}

// наслідування
function Customer2 (name, age, password){
    User2.apply(this, arguments);
    this.password = password;
}

let cust = new Customer2('Chess', 18, 656165);
console.log(cust);



//--------------------------------------------------- ПРОТОТИПИ ОБ'ЄКТІВ --------------------------------------------------------
//









































