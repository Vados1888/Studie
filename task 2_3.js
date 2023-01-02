

let stars;
let spaces;
let row = 6;


function tree(star, space) {
    
    for (let i = 0; i < row; i++) {
        
        let result = '';
        stars = i;
    
            for(let j = 0; j < stars; j++){
                result += star;
            }
                spaces = row - i;
            for(let k = 0; k < spaces; k++) {
                result += space;
            }
        console.log(result);    
    
    }
}

tree('*', ' ');















































