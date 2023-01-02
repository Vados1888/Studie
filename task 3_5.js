


function drawItems(name1, quantyty1, name2, quantyty2, rows, itemsInRow) {
    let id = 0;
    let resultItems = rows * itemsInRow;
    let numInRows = 0;
    let result = '';


    while(id < resultItems) {
        for(let i = 0; i < quantyty1; i++) {
            if (id < resultItems) {
            result += name1;
            id++;
            setWhiteSpace();
            }
        }
        for(let i = 0; i < quantyty2; i++) {
            if (id < resultItems) {
            result += name2;
            id++;
            setWhiteSpace();
            }
        }
    }

    console.log(result);

    function setWhiteSpace() {
        numInRows++;
        if(numInRows == itemsInRow) {
            result += "\n";
            numInRows = 0;
        } else {
            result += "\t"
        }
        
    }

}

drawItems("car", 4 ,"bus", 3, 5, 8);
