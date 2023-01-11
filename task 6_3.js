// Описать функцию getDate(), которая получает в качестве аргумента дату в виде строки в формате, описанном в Практической работе 5-4

// Функция возвращает объект типа Date, соответствующий переданной дате


// 25-07-2021
// 25-7-2021
// 1-1-2021
// 2-12-1979 
let str = '25-07-2021';

function getDate(dateString) {
    
    let regExp = /(\d\d?)-(\d\d?)-(\d{4})/;
    let arrDate = dateString.match(regExp);

    let date = new Date(Number(arrDate[3]), Number(arrDate[2])-1, Number(arrDate[1])+1);
    // let date = new Date(2021, 0, 2)
 
    return date;
}
console.log(getDate(str));