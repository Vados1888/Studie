

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
