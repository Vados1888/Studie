

let date = new Date();
let hour = date.getHours();
let say;
if (hour > 0 && hour < 5 ) {
    say = 'Доброе ночи';
} else if (hour >=5 && hour < 11 ){
    say = 'Доброе утро';
} else if(hour >= 11 && hour < 17 ){
    say = 'Добрый день';
} else if(hour >= 17 && hour < 22) {
    say = 'Добрый вечер';
} else {
    say = 'Добрый вечер';
}
console.log(say);
