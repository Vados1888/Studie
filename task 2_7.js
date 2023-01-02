


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

