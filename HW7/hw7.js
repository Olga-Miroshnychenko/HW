//Задание 1
let paragraph = document.querySelector('p');
title.textContent; //"Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci reprehendunt has in. Decore nemore philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu."
//Задание 2
function isNode(node) {
    let paragraph = document.querySelector(node);
    if (!paragraph.childNodes) { paragraph.childNodes = 0 };
    let res = paragraph.nodeType + paragraph.nodeName + paragraph.childNodes.length;
    return res.split('');
} //["1", "P", "5"]
//Задание 3
let alllink = document.querySelectorAll('ul a');
for (let i = 0; i < alllink.length; i++) {
    let res = alllink[i];
    console.log(res.textContent.split(' '));
};

//Задание 4
let paragraph = document.querySelector('p');
paragraph.firstChild.data = '-text-';
paragraph.lastChild.data = '-text-';
paragraph.firstChild.nextSibling.nextSibling.data = '-text-'; //-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
// Задание 1 слайд 11
let list = document.querySelector('ul');
list.classList.add("list");
//Задание 2
list.nextSibling.nextSibling.nextSibling.setAttribute('id', 'link'); // <a href='#' id='link'>Some link</a>
//Задание 3
for (let i = 0; i < list.children.length; i += 2) {
    let res = list.children[i];
    console.log(res.classList.add("item"));
};
//Задание 4
let allLinks = document.links;
for (let i = 0; i < allLinks.length; i++) {
    let res = allLinks[i];
    console.log(res.classList.add("custom-link"));
};
//Задание 1
let li = document.createElement('li');
text = document.createTextNode("item " + (list.children.length + 1));
li.appendChild(text);
list.appendChild(li);
li.classList.add('new-item');
let li2 = document.createElement('li');
text = document.createTextNode("item " + (list.children.length + 1));
li2.appendChild(text);
list.appendChild(li2);
li2.classList.add('new-item');
//Задание 2
for (let i = 0; i < allLinks.length; i++) {
    let res = allLinks[i];
    console.log(res.insertAdjacentHTML('afterbegin', '<strong></strong>'));
};
//Задание 3
let img = document.createElement('img');
img.setAttribute('src', 'https://p2.zoon.ru/preview/eCsX336nsO4c5h-PdXihNA/520x270x85/1/1/2/original_56777f23b4b78680228b456c_591c64a92bace.jpg');
img.setAttribute('alt', 'ECSchool');
document.body.insertAdjacentHTML('afterbegin', '<img></img>');
//Задание 4
let mark = document.querySelector('mark');
let elem = document.createElement('text');
text = document.createTextNode(" green ");
elem.classList.add('green');
mark.insertAdjacentHTML('beforeend', ' green ');
// 5
let jf = document.querySelectorAll('ul a');
for (let i = 0; i < jf.length; i++) {
    let res = jf[i];
    console.log(res);
};