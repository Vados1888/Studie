
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
