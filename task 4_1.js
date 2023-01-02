

let product1 = {};

product1.name = 'JavaScript';
product1.brand = 'SourceIT';
product1.price = 30000;

let product2 = {
    name: 'JavaScript',
    brand: 'SourceIT',
    price: 30000
}

for (const prop1 in product1) {
    console.log(prop1);
}

for (const prop2 in product2) {
    console.log(prop2);
}
