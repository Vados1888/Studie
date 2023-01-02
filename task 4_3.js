

let fibsArr = [1, 1];
let result;
let N = 10;
for (let i = 0; i < N; i++) {

    result = fibsArr[0 + i] + fibsArr[1 + i];
    fibsArr.push(result);

}

console.log(fibsArr);