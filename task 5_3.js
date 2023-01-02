

function strPad (input, fullLen, fillStr, fillType) {

    let result = '';
    
    if (input.length < fullLen && fillType === undefined) {
        let strRight = '';
        for (let i = 0; i < fullLen; i++) {
            strRight += fillStr;

            if (strRight.length > fullLen - input.length) {
                strRight = strRight.substring(0, fullLen - input.length);
            }
            result = input + strRight;
        }

        // result = input.padEnd(fullLen, fillStr);
    }

    if (input.length < fullLen && fillType === 'FILL_LEFT') {

        let strLeft = '';
        for (let i = 0; i < fullLen; i++) {
            strLeft += fillStr;

            if (strLeft.length > fullLen - input.length) {
                strLeft = strLeft.substring(0, fullLen - input.length);
            }
            result = strLeft + input;
        }

        // result = input.padStart(fullLen, fillStr);
    }

    if (input.length < fullLen && fillType === 'FILL_BOTH') {
        let fillBothStr = fullLen - input.length;

        for (let i = 0; i < fillBothStr / 2; i++) {
        
            result += fillStr;
        }

        result += input;

        for (let i = 0; i < fillBothStr / 2; i++) {
            result += fillStr;
        }
    }
    return result;
  
}

console.log(strPad('star', 8, '-*-', 'FILL_LEFT'));

