//Задание 1
const rectangle = {
    width: 100,
    height: 100,
    getSquare: function () { return (this.width * this.height) }
};
//Задание 2
const price = {
    price: 10,
    discount: '15%',
    getPriceWithDiscount: function () {
        console.log(this.price * (100 - parseFloat(discount)) / 100);
    },
    getPrice: function () {
        console.log(this.price);
    }
};
//Задание 3
const object = {
    height: 10,
    getNewHeightWithInc: function () {
        return this.height = (this.height + 1)
    }
}
object.height//10
object.getNewHeightWithInc();//11
object.height//11
//Задание 4
const numerator = {
    value: 1,
    double: function () {
        (this.value *= 2);
        return this;
    },
    plusOne: function () {
        this.value += 1;
        return this;
    },
    minusOne: function () {
        this.value -= 1;
        return this;
    }
}
numerator.double().plusOne().plusOne().minusOne();
numerator.value//3
//Задание 1 This
const product1 = {
    price: '10$',
    countProducts: 15,
    totalCost: totalCost
}
function totalCost() {
    return (parseFloat(this.price) * this.countProducts);
}//150
//Задание 2
const product = {
    price: '10$',
    countProducts: 15,
    totalCost: totalCost
}
function totalCost() {
    return (parseFloat(this.price) * this.countProducts);
}//150
const product2 = {
    price: '77$',
    countProducts: 16,
}
totalCost.call(product2);//1232
//Задание 3
let sizes = { width: 5, height: 10 },
    getSquare = function () { return this.width * this.height };
getSquare.call(sizes);//50
//Задание 4
let element = {
    height: 25,
    getHeight: function () { return this.height; }
};
let getElementHeight = element.getHeight.bind(element);
getElementHeight();
//Деструктурирующее присваивание. Задачи.
//Задание 1
const [first, ...other] = ['a', 'b', 'c', 'd'];
function getArray() {
    return {
        first,
        other
    }
};
//Задание 2
const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};
function getInfo({ name, info: { partners } }) {
    if (`${name}` !== '') {
        console.log(`Name is ${name}`)
    } else {
        console.log(`Name is ${name = 'Unknown'}`)
    };
    console.log(`Partners are ${partners[0]},${partners[1]}`);
}
//Функции стрелки. Задачи.
//Задание 1
let sum = (...argument) => {
    const params = Array.prototype.slice.call(argument);
    if (!params.length) return 0;
    return params.reduce((prev, next) => prev + next);
}






