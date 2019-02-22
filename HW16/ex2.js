function Build(floor, name) {
    this.floor = floor || 5;
    this.name = name || 'Some place';
    //Установить количество этажей
    this.setFloor = function (value) {
        this.floor = value;
        return 'Этаж установлен :' + value;
    }
    //Получить количество этажей
    this.getFloor = function () {
        return this.floor;
    }
}
//Жилой дом
function House(floor, numberOfApartment) {
    this.floor = floor || 5;
    this.numberOfApartment = numberOfApartment || 5;
    //Получить количество этажей и количество квартир вобщем
    this.getFloor = function () {
        return Build.call(this, {
            этажи: this.floor,
            всегоКвартир: this.numberOfApartment * this.floor
        });
    }
}
//Торговый центр
function Center(floor, numberOfShop) {
    this.floor = floor || 5;
    this.numberOfShop = numberOfShop || 10;
    //Получить количество этажей и количество магазинов вобщем
    this.getFloor = function () {
        return Build.call(this, {
            этажи: this.floor,
            всегоМагазинов: this.numberOfShop * this.floor
        });
    }
}
let house = new House();
house.getFloor();
let center = new Center();
center.getFloor();