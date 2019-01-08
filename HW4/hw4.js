//Задание 1
function multiply() {
    let a = 1;
    if (typeof a !== 'number' || isNaN(a)) return 0;
    if (arguments.length === 0) return 0;
    for (let i = 0; i < arguments.length; i++) a *= arguments[i];
    return a;
}
//Задание 2
function reverseString(str) {
    let letter = str.split('');
    return letter.reverse().join('');
}
let reverse = reverseString('test');
//Задание 3
function getCodeStringFromText(str) {
    let res = " ";
    for (let i = 0; i < str.length; i++) {
        res += str.charCodeAt(i);
    }
    return res.trim();
}
//Задание 4
function randomNumbers(number) {
    let randNum = Math.floor((Math.random() * 10) + 1);
    if (number <= 0 || number >= 10) {
        console.log('Значение не принято');
    }
    if (randNum === number) {
        return 'Вы выиграли';
    } else {
        return 'Вы  не угадали ваше число ' + number + ' а выпало ' + randNum;
    }
}
//Задание 5
function getArray(N) {
    let arr = [];
    for (let i = 1; i < N + 1; i++) {
        arr += [i];
    }
    return arr.split('');
};
//Задание 6

function doubleArray(a) {
    return a.concat(a);
}
let a = [1, 2, 3];
// Задание 7
function changeCollection() {
    let args = [];
    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];

    }
    args[i].shift();
    return args[i];
}