//Задание 1
class Component {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
};
const comp = new Component('span');//Component {tagName: "span", node: span}
//Задание 2
class Component1 {
    constructor(tagName) {
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
    setText(text) { this.node.textContent = text };
}
const comp1 = new Component1('a');
comp1.setText = 'some text';
comp1;//Component1 {tagName: "a", node: a, setText: "some text"}
//Задание 3
class Сalculator {
    constructor(number) {
        this.num = number;
    }
    setNember(number) {
        if (typeof number !== 'number') {
            console.error('Value should be a number');
        }
        this.num = number;
    }
    plusNumber(number) { return this.num += number }
    multiplyNumber(number) { return this.num *= number }
    minusNumber(number) { return this.num -= number }
    divisionNumber(number) { return this.num /= number }
    getNember() { return this.num }
}
const calc = new Сalculator();
