

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


function calc (a, b){
    if (b === 0){
        throw new Error('b is 0')
    }
    return a/ b;
}

calc(4, 0);









