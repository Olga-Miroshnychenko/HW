let string = 'some test string';
console.log(string);
console.log('Длинна строки: ' + string.length);
console.log('1.Певая буква строки: ' + string[0]);
console.log('1.Последняя буква строки: ' + string[string.length - 1]);

console.log('2.' + string.charAt(0).toUpperCase() + string.slice(1, -1) + string.charAt(15).toUpperCase());

console.log('3.Положение слова "string" : ' + string.indexOf('string'));
console.log('4.Положение 2-го пробела : ' + string.indexOf(' ', string.indexOf(' ') + 1));
console.log('5.Получить строку с 5-го символа длиной 4 буквы : ' + string.substr(4, 4));
console.log('6.Получить строку с 5-го символа длиной 4 буквы : ' + string.substring(4, 8));
console.log('7.Получить строку с 5-го символа длиной 4 буквы : ' + string.slice(0, -6));
let a = 20;
console.log('Переменная a= ' + a);
let b = 16;
console.log('Переменная b= ' + b);
console.log('8.Делаем "2016" : ' + a + b);
console.log('Числа.Задачи');
console.log('1.Число ПИ:' + Math.PI);
let PI;
console.log('1.Округление до 2-го знака:' + Math.round(Math.PI * 100) / 100);
console.log('15, 11, 16, 12, 51, 12, 13, 51');
console.log('2.Минимальное число : ' + Math.min(15, 11, 16, 12, 51, 12, 13, 51));
console.log('2.Максимальное число : ' + Math.max(15, 11, 16, 12, 51, 12, 13, 51));
let A = Math.random() * 100;
console.log("3.Рандомное число : " + A)
console.log("3.Округляем до 2-х знаков : " + Math.round(parseFloat(A) * 100) / 100);
console.log((Math.random() * 10) + 0 | 0);
let D = 0.6;
let R = 0.7;
let Q = D + R;
console.log('4. 0.6 + 0.7 = ' + Math.round(Q * 100) / 100);
let num = '100$';
console.log(parseInt(num));


