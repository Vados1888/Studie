

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
