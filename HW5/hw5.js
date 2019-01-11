//Функции высшего порядка. Задачи.
//Задание 1
function takeArray(arr, handler) {
    let newStr = '';
    for (let item of arr) {
        newStr += handler(item);
    }
    return 'New value: ' + newStr;
};
function handler1(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        res += arr[0].toUpperCase() + arr.substring(1);
        return res;
    }
};
takeArray(['my', 'name', 'is', 'Trinity'], handler1);// "New value: MyNameIsTrinity"}
function handler2(arr) {
    arr *= 10
    return arr + ',';
};
takeArray([10, 20, 30], handler2);//"New value: 100,200,300,"
function handler3(arr) {
    for (keys in arr) {
        return arr['name'] + ' is ' + arr['age'] + ', ';
    }
};
takeArray([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3);//"New value: Jhon is 45, Aaron is 20, "
function handler4(arr) {
    let letter = arr.split('');
    return letter.reverse().join('') + ' , ';
};
takeArray(['abc', '123'], handler4);//"New value: cba , 321 , "
//Задание 2
function checkNum(element, index, array) {
    return element > 5;
}
[10, 5, 3, 130, 44].every(checkNum);   // false
[12, 59, 17, 190, 42].every(checkNum); // true
 }
function callback(arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            return true;
        }
    }
    let everyRes = arr.every(function (val) {
        return typeof val === 'number';
    });
    //Перебирающие методы. Задачи.
    //Задание 1
    let numbers = [1, 2, 3, 5, 8, 9, 10];
    let changedNumbers = numbers.map(function (num) {
        if (num % 2) {
            return { digit: num, odd: false }
        } else {
            return { digit: num, odd: true }
        }
    });//0: {digit: 1, odd: false}
    //1: {digit: 2, odd: true}
    //2: {digit: 3, odd: false}
    //3: {digit: 5, odd: false}
    //4: {digit: 8, odd: true}
    //5: {digit: 9, odd: false}
    //6: {digit: 10, odd: true}
    //Задание 2
    let arr = [12, 4, 50, 1, 0, 18, 40];
    let someRes = arr.some(function (val) {
        return val === 0;
    }); // true
    //Задание 3
    let arr = ['yes', 'hello', 'no', 'easycode', 'what'];
    let someRes = arr.some(function (val) {
        return val.length > 3;
    }); // true
    //Задание 4
    let arr = [{ char: "a", index: 12 }, { char: "w", index: 8 }, { char: "Y", index: 10 }, { char: "p", index: 3 }, { char: "p", index: 2 },
    { char: "N", index: 6 }, { char: " ", index: 5 }, { char: "y", index: 4 }, { char: "r", index: 13 }, { char: "H", index: 0 },
    { char: "e", index: 11 }, { char: "a", index: 1 }, { char: " ", index: 9 }, { char: "!", index: 14 }, { char: "e", index: 7 }];
    arr.sort(function (prev, next) {
        return prev.index - next.index;
    });
    arr.reduce(function (prev, current) {
        return prev += current.char + "";
    }, '');//"Happy New Year!"
    //Метод Sort. Задачи.
    //Задание 1
    let arr = [[14, 45], [1], ['a', 'c', 'd']];
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    };
    arr.sort(compareNumeric);//[ [1], [14, 45], ['a', 'c', 'd'] ]

