// Опишите конструктор Storage, который принимает в качестве аргумента объект вида: {'ключ':'значение', 'ключ':'значение', …}
// Опишите метод get(name), который возвращает значение по ключу
// Опишите метод set(name, value), который сохраняет новую пару "ключ: значение"
// Использование:
//     let products = new Storage({'phone':'brand'});
//     let phoneBrand = products.get('phone');
//     products.set('tablet', 'tabletBrand');


function Storage(newObj) {
    this.values = newObj || {};
}

Storage.prototype.get = function(name) {
    return this.values[name];
}

Storage.prototype.set = function (name, value) {
    this.values[name] = value;
}

let storage = new Storage();
storage.set('phone', 'samsung')

console.log(storage.get('phone'));