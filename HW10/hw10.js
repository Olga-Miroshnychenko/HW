//Замыкания. Задачи.
//Задание 1
function minus(num1) {
    if (typeof num1 !== 'number') {
        num1 = 0;
    };
    return function (num2) {
        if (typeof num2 !== 'number') {
            num2 = 0;
        };
        console.log(num1 - num2);
    }
};
minus(10)(6); //4
minus(5)(6); //-1
minus(10)(); //10
minus()(6); //-6
minus()(); //0
//Задание 2
function MultiplyMaker() {
    let MultiplyMaker = 2;
    return function (val) {
        x = val;
        return MultiplyMaker *= x;
    };
};
const multiply = MultiplyMaker();
multiply(2); // 4 
multiply(1); // 4 
multiply(3); // 12 
multiply(10); // 120 
//Задание 3
const someStr = (function () {
    let _string = ' ';
    function setString(value) {
        if (!value) { return value = '' };
        if (typeof value === 'number') { return value.toString() };
        _string = value;
        return 'Установленная строка :  ' + _string;
    }
    function getString() {
        return 'Полученная строка : ' + _string;
    }
    function getLenghtString() {
        return 'Длинная полученнной строки : ' + _string.length;
    }
    function getReverse() {
        let arr = _string.split('');
        return 'Полученная строка-перевертыш : ' + arr.reverse().join('');
    }
    return {
        setString: setString,
        getString: getString,
        getLenghtString: getLenghtString,
        getReverse: getReverse
    };
}());
//Задание 4
function calc(x = 10) {
    function setValue(val) {
        if (typeof val !== 'number') return 'Передайте число';
        x = val;
        return console.log('модуль.установитьЗначение( ' + x + ' )');
    }
    function plus(val) {
        x += 5;
        return console.log('модуль.прибавить( ' + x + ' )');
    }
    function multiply(val) {
        x *= 2;
        return console.log('модуль.умножить( ' + x + ' )');
    }
    function getMeaning(val) {
        return console.log('модуль.узнатьЗначение( ' + (x.toFixed(2)) + ' )');
    }
    return {
        setValue: setValue,
        plus: plus,
        multiply: multiply,
        getMeaning: getMeaning
    }
}
const myCalc = calc();
//Конструкторы. Задачи.
// Задание 1
function Car(model, year) {
    function getFullModel() {
        return model[0].toUpperCase() + model.slice(1, model.length);
    }
    function getYear() {
        let date = new Date();
        return date.getFullYear() - year;;
    }
    return {
        getFullModel,
        getYear
    }
}
let lexus = new Car('lexus', 2);
lexus.getYear();//2017
lexus.getFullModel();//"Lexus"
//Задание 2
function SomeString(str) {
    function setString(value) {
        str = value;
        return 'Oригинальная строка : ' + str.toString();
    }
    function getEncString() {
        let arr = str.split('');
        return 'Зашифрованная строка : ' + arr.reverse().join('');
    }
    return {
        setString,
        getEncString
    };
};
let string = new SomeString();