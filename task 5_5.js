// В переменной names содержится строка: "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo"

// Задание: получить строку вида:
//    John Lennon
//    Paul McCartney
//    George Harrison
//    Ringo Star


let name = "Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo";


let regExp = /(\w.*) (\w.*)/gm;
console.log(name.replace(regExp, '$2 $1'));