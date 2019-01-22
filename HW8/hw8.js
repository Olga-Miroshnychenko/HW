//Задание 1
let btn = document.getElementById('btn-msg');
btn.onclick = function () { alert('Custom message'); };
//Задание 2
let button = document.getElementById('btn-msg');
button.onmouseover = function () { this.style.background = 'red'; };
button.onmouseout = function () { this.style.background = 'buttonface'; };
//Задание 3
document.body.onclick = e => document.querySelector("#tag").textContent = 'Tag: ' + e.target.tagName;
//Задание 4
let btn2 = document.getElementById('btn-generate');
let list = document.querySelector('ul');
btn2.onclick = function () {
    let li = document.createElement('li');
    text = document.createTextNode("Item " + (list.children.length + 1));
    li.appendChild(text);
    list.appendChild(li);
};
