
//------------------------------------------------------ ФУНКЦИИ --------------------------------------------------------

// можливість запакувати код, який буде повторюватися в майбутньому
// для прописання різних данних в ф використовуються аргументи - назви змінних

//       і'мя  аргумент
function writer(surname, name, gender) {
    document.write(
        `<div>
            <h2>${surname}</h2>
            <p>${name}</p>
            <p>${gender}</p>
        </div>`
    );
}



writer('Kio', 'Yukisa', 'female');
writer('Bonyfoger', 'Chess', 'female');
writer('Wiagarti', 'Lacus', 'male');









// створюємо ф, яка буде ітерувати кажен новий масив за допомогою циклу

function printerArray(array) {
    for (const item of array) {
        console.log(item);
    }
}
















