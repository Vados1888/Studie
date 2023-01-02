

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

