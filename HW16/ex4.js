function User(name, date) {
    this.name = name || 'Sam';
    this.date = date || '19.10.1988';
}
// Методы хранятся в прототипе
User.prototype.getInfo = function () {
    console.log('Имя :' + this.name + '.Дата рождения :' + this.date);
}
let user = new User();
user.getInfo();
// --------- Класс-потомок -----------
// Конструктор потомка
function Admin(name, price, superAdmin) {
    this._superAdmin = true || false;
    User.apply(this, arguments);
}
// Унаследовать
Admin.prototype = Object.create(User.prototype);

// Желательно и constructor сохранить
Admin.prototype.constructor = Admin;

// Методы потомка
Admin.prototype.getInfo = function () {
    // Вызов метода родителя внутри своего
    // Furniture.prototype.getInfo.apply(this);
    console.log('Имя:' + this.name + '.Дата рождения :' + this.date + '.Супер Админ :' + this._superAdmin + '.Срок действия :' + this.validDate);
};

// Готово, можно создавать объекты
let admin = new Admin();
admin.getInfo();

function Guest(name, price, validDate) {
    this.validDate = validDate;
    User.apply(this, arguments);
}
// Унаследовать
Guest.prototype = Object.create(User.prototype);

// Желательно и constructor сохранить
Guest.prototype.constructor = Guest;

// Методы потомка
Guest.prototype.getInfo = function () {
    // Вызов метода родителя внутри своего
    //Furniture.prototype.getInfo.apply(this);
    console.log('Имя:' + this.name + '.Дата рождения :' + this.date + '.Срок действия :' + this.validDate + '.Супер Админ :' + this._superAdmin);
};

// Готово, можно создавать объекты
let guest = new Guest();
guest.getInfo();