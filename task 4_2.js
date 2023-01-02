

let product1 = {};

product1.name = 'JavaScript';
product1.brand = 'SourceIT';
product1.price = 30000;
product1.show = function(){
    console.log (this.name + "-" + this.price);
}

function showProduct(){
    console.log (this.name + "-" + this.price);
}
let product2 = {
    name: 'JavaScript',
    brand: 'SourceIT',
    price: 30000,
    show: showProduct
}
 
console.log(product1.show());
console.log(product2.show());

