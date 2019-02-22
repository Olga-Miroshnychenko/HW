
function Furniture(name, price) {
    this.name = name || 'Стол';
    this.price = price || 150;
}
// Методы хранятся в прототипе
Furniture.prototype.getInfo = function () {
    console.log('Цена :' + this.price + '.Название :' + this.name);
}
let furniture = new Furniture();
furniture.getInfo();
// --------- Класс-потомок -----------
// Конструктор потомка
function OfficeFurniture(name, price, inStock) {
    this.table = inStock || 'нет';
    Furniture.apply(this, arguments);
}
// Унаследовать
OfficeFurniture.prototype = Object.create(Furniture.prototype);

// Желательно и constructor сохранить
OfficeFurniture.prototype.constructor = OfficeFurniture;

// Методы потомка
OfficeFurniture.prototype.getInfo = function () {
    // Вызов метода родителя внутри своего
    // Furniture.prototype.getInfo.apply(this);
    console.log('Цена :' + this.price + '.Название :' + this.name + '.Компьтерный стол :' + this.table);
};

// Готово, можно создавать объекты
let office = new OfficeFurniture();
office.getInfo();

function HomeFurniture(name, price, instruction) {
    this.instruction = instruction || ' Нет';
    Furniture.apply(this, arguments);
}
// Унаследовать
HomeFurniture.prototype = Object.create(Furniture.prototype);

// Желательно и constructor сохранить
HomeFurniture.prototype.constructor = HomeFurniture;

// Методы потомка
HomeFurniture.prototype.getInfo = function () {
    // Вызов метода родителя внутри своего
    //Furniture.prototype.getInfo.apply(this);
    console.log('Цена :' + this.price + '.Название :' + this.name + '.Инструкция :' + this.instruction);
};

// Готово, можно создавать объекты
let home = new HomeFurniture();
home.getInfo();