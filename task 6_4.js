// Измените функцию getDate(), созданную в предыдущей практической работе.

// В случае отрицательного результата парсинга строки, функция должна "бросить" ошибку типа Error.

// Сгенерируйте ошибку и отловите её.



// 25-07-2021
// 25-7-2021
// 1-1-2021
// 2-12-1979 
let str = '1-1-2021';

function getDate(dateString) {
    
    let date = 'Fix date please';
    try {
        let regExp = /(\d\d?)-(\d\d?)-(\d{4})/;
        let arrDate = dateString.match(regExp);

        if (arrDate === null) {
            throw new Error('The date in vrong formt');
        }
        date = new Date(Number(arrDate[3]), Number(arrDate[2])-1, Number(arrDate[1])+1);
       
    } catch (error) {
        console.log(error.message);
    }

    return date;
}
console.log(getDate(str));