

function powFunc(x, p) {
    
    if(x === 1 || p === 1) return x;
    if(p < 0) return 'Input positiv number';

    return x * powFunc(x, --p);

}
console.log(powFunc(5, 1));

