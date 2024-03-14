
//------------------------------------------------------------- DOM --------------------------------------------------------------------------
// об'єктна модель документу
// за його допомоги можна шукати щось всередині нашого документу

 //витягаємо елементи:

// id / знайде завжди тільки перший елемент по айді, і айді має бути унікальним
document.getElementById('list-1');

// class / колекція
// по класу шукає хтмл колекцію елементів. Щоб дістати елемент - ітеруємо. Або по індексам.
 let menu = document.getElementsByClassName('menu')

// tag / колекція
let ilList = document.getElementsByTagName('ul')
// знайде усі ul в документі

// знаходимо конкретні елементи з конкретної колекції тегів
let list1 = document.getElementById('list-1')    //тут надали списку id і витягуємо його
list1.getElementsByTagName('li')      // так витягуємо не всі ліжка в об'єкті, а лише з конкретного списку




// знаходить лише 1 елемент по певному css селектору: перший, який зустріне
document.querySelector('.menu')
// знаходить всі / повертає список вузлів
document.querySelectorAll('ul')
let newCol = document.querySelectorAll('.menu:nth-child(2)>li')



//--------------------------------------------------------------   ------------------------------------------------------------------










