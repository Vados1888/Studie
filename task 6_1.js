// Создайте конструктор Product со свойствами:
//     title
//     year
//     price
// Создайте объект типа Product передав в конструктор произвольные значения
// Добавьте в прототип конструктора Product метод show, который выводит значения св-в title и price
// Вызовите метод show созданного объекта


function Product(title, year, price) {
    this.title = title;
    this.year = year;
    this.price = price;
    
}

const product = new Product('HIMARS', 2022, 10e6);
console.log(product);
Product.prototype.show = function () {
    console.log('Title: ' + this.title + '\n' +  'Price: ' + this.price + '$');
}

product.show()