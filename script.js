


/* TASK 2.3

let stars;
let spaces;
let row = 6;


function tree(star, space) {
    
    for (let i = 0; i < row; i++) {
        
        let result = '';
        stars = i;
    
            for(let j = 0; j < stars; j++){
                result += star;
            }
                spaces = row - i;
            for(let k = 0; k < spaces; k++) {
                result += space;
            }
        console.log(result);    
    
    }
}

tree('*', ' ');
*/


/*TASK 2.6

let date = new Date();
let hour = date.getHours();
let say;
if (hour > 0 && hour < 5 ) {
    say = 'Доброе ночи';
} else if (hour >=5 && hour < 11 ){
    say = 'Доброе утро';
} else if(hour >= 11 && hour < 17 ){
    say = 'Добрый день';
} else if(hour >= 17 && hour < 22) {
    say = 'Добрый вечер';
} else {
    say = 'Добрый вечер';
}
console.log(say);
*/


/* TASK 2.7


let num = 55;

if (num === 11) {
    console.log(`На ветке сидит ${num} ворон`);
} else if(num % 10 === 1) {
    console.log(`На ветке сидит ${num} ворона`);
} else {
    switch (num) {
        case 2:
            console.log(`На ветке сидит ${num} вороны`);
            break;
        case 3:
            console.log(`На ветке сидит ${num} вороны`);    
            break;
        case 4:
            console.log(`На ветке сидит ${num} вороны`);    
        default:
            console.log(`На ветке сидит ${num} ворон`);
    }
}
*/


/* TASK 3.1

function printRow(space, star) {
let rows = 5;
let spaces;
let stars;

let result;

for(let i =1; i <= rows; i++) {

    result = '';
    spaces = rows - i;
    for(let k = 1; k <= spaces; k++) {
        result += space;
    }

    stars = 2 * i - 1;
    for(let f = 1; f <= stars; f++){
        result += star;
    }

    console.log(result);

} 
}

for (let i = 0; i < 1 ; i++) {

printRow(' ', '*');
    
}
*/


/* TASK 3.2
const pow = function (x, p) {

    let result = x;

    if (p === 1) {
        result = x;
    } else if (typeof p === 'string') {
        result = x;
    } else {
        for (let i = 1; i <= p; i++) {
            result = result * x;
        }
    }

    console.log(result);
    
    return result;
}
*/


/* TASK 3.3

function compare(x) {
    return function(y) {
        if (y > x) {
            return 1;
        } else if(y < x){
            return -1;
        } else {
            return null;
        }
    }
}

console.log(compare());
*/


/*TASK 3.4

function powFunc(x, p) {
    
    if(x === 1 || p === 1) return x;
    if(p < 0) return 'Input positiv number';

    return x * powFunc(x, --p);

}
console.log(powFunc(5, 1));

*/


/* TASK 3.5


function drawItems(name1, quantyty1, name2, quantyty2, rows, itemsInRow) {
    let id = 0;
    let result = rows * itemsInRow;
    let numInRows = 0;
    let result = '';


    while(id < result) {
        for(let i = 0; i < quantyty1; i++) {
            if (id < result) {
            result += name1;
            id++;
            setWhiteSpace();
            }
        }
        for(let i = 0; i < quantyty2; i++) {
            if (id < result) {
            result += name2;
            id++;
            setWhiteSpace();
            }
        }
    }

    console.log(result);

    function setWhiteSpace() {
        numInRows++;
        if(numInRows == itemsInRow) {
            result += "\n";
            numInRows = 0;
        } else {
            result += "\t"
        }
        
    }

}

drawItems("car", 4 ,"bus", 3, 5, 8);
*/


/*TASK 3.6

function printNumbers(nums, cols) {
    
    let result = '';
    const rows = nums / cols;

    for (let i = 1; i <= rows; i++) {
        
        result = '';

        if(nums % cols === 0) {
            for(let el = 0; el < cols; el++) {
                result += el * rows + i;
            }
        } else {
            for(let el = 0; el < cols; el++) {
                result += el * rows.toFixed() + i;
            }
        }
        console.log(result);
    }

}

printNumbers(13, 3)

*/


/* TASK 4.1

let product1 = {};

product1.name = 'JavaScript';
product1.brand = 'SourceIT';
product1.price = 30000;

let product2 = {
    name: 'JavaScript',
    brand: 'SourceIT',
    price: 30000
}

for (const prop1 in product1) {
    console.log(prop1);
}

for (const prop2 in product2) {
    console.log(prop2);
}
*/


/* TASK 4.2


let product1 = {};

product1.name = 'JavaScript';
product1.brand = 'SourceIT';
product1.price = 30000;
product1.show = function(){
    console.log (this.name + "-" + this.price);
}

function showProduct(){
    console.log (this.name + "-" + this.price);
}
let product2 = {
    name: 'JavaScript',
    brand: 'SourceIT',
    price: 30000,
    show: showProduct
}
 
console.log(product1.show());
console.log(product2.show());

*/


/* TASK 4.3

let fibsArr = [1, 1];
let result;
let N = 10;
for (let i = 0; i < N; i++) {

    result = fibsArr[0 + i] + fibsArr[1 + i];
    fibsArr.push(result);

}

console.log(fibsArr);
*/


/* TASK 4.4


let x = [3, 10];
let y = [];
x[77] = 7;

for (let i = 0; i < x.length; i++) {
    y.push(x[i] * x[i]);
}
console.log(y);



for (let key in x) {
    y.push(x[key] * x[key]);
}
console.log(y);


for (let it of x) {
    console.log(it);
    y.push(it * it);
}

console.log(y);
*/


/* TASK 5.1

var s = 'Мы знаем, что монохромный цвет - это градация серого';
var txt = 'хром';
var word;

word = s.substring(s.indexOf(txt), s.indexOf(txt) + 4);
console.log(word);

*/


/*TASK 5.2

function substrCount(input, needle, offset, length) {

    let strPart = input.slice(offset, length);
    let result = strPart.toLowerCase().split(needle.toLowerCase()).length - 1;
    console.log(result);
    return result;
}
substrCount('Good Golly Miss Molly', 'll', 7, 25);

*/


