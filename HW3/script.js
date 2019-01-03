//Тернарный оператор. Switch case. Задачи.
//Задание 1
let a;
switch (a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('others');
}
//Задание 2
//1.
let screen;
screen === 'hidden' ? console.log(screen = "visible") : console.log(screen = "hidden");
//2.
let n;
n === 0 ? console.log(n = 1)
    : n < 0 ? console.log(n = "less then zero")
        : console.log(n *= 10);
//3.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
car.age > 5 ? console.log(car.needRepair = 'true') : car.needRepair = false;
//Циклы. Задачи.
//Задане 1
let str = "i am in the easy code";
let res = '';
for (let i = 0; i < str.length; i++) {
    res += (str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
    console.log(res);
}

//Задание 2
let str = 'tseb eht ma i';
let res = ' ';
for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
    console.log(res);
}
//Задание 3
let n = 10;
for (let i = 1; n; i *= n--) {
    console.log(i);
}
//Задание 4
let str = "JavaScript is a pretty good language";
let res = '';
for (let i = 0; i < str.length; i++) {
    res += (str[i - 1] === ' ') ? str[i].toUpperCase() : str[i];
    res = res.split(' ').join('');
    console.log(res);
}
//Задание 5
let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let index of myNum) {
    if (index % 2 !== 0) {
        console.log(index);
    }

}
//Задание 6
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
}
for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
        console.log(list[key]);
    }
}
