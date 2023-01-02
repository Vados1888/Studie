


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
