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


/* TASK 3.5

let cars = "car";
let buses = "bus";
const ROWS = 3;
let result = '';


let i = 0;
    while (i < 1) {
        i++;
        for(let c = 1; c <= 4; c++) {
            result += cars;
        }

        for(let b = 1; b <= 3; b++) {
            result +=buses;
        }
       
        console.log(result);
    }
*/


/*TASK 3.6

printNumbers(nums, cols) {
    let rows = 4;
    let row;
    let result = '';

    for (let i = 1; i <= col; i++) {
        row = i + 4;

        rsult += row;
    }

}
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