//Задание 1
let prodObj = {
    product: 'iphone'
};
prodObj.product         // 'iphone'
console.log(prodObj);   // 'iphone'
//Задание 2
prodObj.price = 1000;  // '1000'
prodObj.price           // '1000'
console.log(prodObj);   //  product: "iphone", price: 1000

prodObj.currency = 'dollar'; // 'dollar'
prodObj.currency              // 'dollar'
console.log(prodObj);   // product: "iphone", price: 1000, currency: "dollar"
//Задание 3
prodObj.details = {
    color: ' ',
    model: ' '
};
console.log(prodObj);  // currency: "dollar", details: {color: " ", model: " "} price: 1000 ,product: "iphone"

//Преобразование примитивов. Задачи.

let a = 0 || 'string';   // 'string' т.к не пустая строка  , 0 - false
let a = 1 && 'string';   // 'string' т.к 1 = true
let a = null || 25;      // 25 т.к null-false
let a = null && 25;      // null т.к 25 -true , а && -выводит  false
let a = null || 0 || 35; // 35 т.к null=false , 0 = false ,35 =true
let a = null && 0 && 35; // null т.к null=false он сразу запинается на лжи

//Что отобразится в консоли. Почему?
12 + 14 + '12' // "2612" сначала арифметика (12+14=26) , преобразование строки к числу складывание его к уже готовому результату
3 + 2 - '1'    // "4" Сложение ,преобразование к числу и вычетание
'3' + 2 - 1    //"31" Вычитание(2-1=1) , преобразование к числу и сложение
true + 2       //true=1 , 1+2 =3
    + '10' + 1      // "11" Преобразование и сложение
undefined + 2  // NaN - не число 
null + 5       // 5 т.к null=0
true + undefined// NaN -не число

//If else. Задачи.

//Задание 1
let screen;
screen = 'visible';
if (screen == "hidden") {
    screen = "visible";
    console.log(screen);
} else {
    screen = "hidden";
    console.log(screen); // Выведет 'hidden'

};

//Задание 2
let n;
n = 5;
if (n == 0) {
    n = 1;
    console.log(n);
} else if (n < 0) {
    n = "less then zero";
    console.log(n);
} else if (n > 0) {
    n *= 10;
    console.log(n);  // Выведет 50
};
// Задание 3
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};

car.age = 6;

if (car.age > 5) {
    car.needRepair = 'true';
    console.log(' Need Repair ' + ': ' + car.needRepair);  // Выведет Need Repair : true
} else {
    car.needRepair = false;
};

//Задание 4 

let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
}
discount = '3%';
if (parseInt(discount) > 0) {
    item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) * parseInt(discount) / 100);
    console.log(item.priceWithDiscount);//Выведет 97
} else if (parseInt(discount) <= 0) {
    console.log(price);
}

//Задание 6
let product = {
    name: “Яблоко”,
    price: “10$”
};
price = "9$";
let min = 10; // минимальная цена
let max = 20; // максимальная цена
if (parseInt(price) >= min && parseInt(price) <= max) {
    console.log(product.name);

} else {
    console.log('Товар не найдено');//Выведет "Товар не найден"
}







