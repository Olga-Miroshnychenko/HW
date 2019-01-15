const head = document.head;                  // <head></head>
head.nextElementSibling; // <body>...</body>
console.log(head.nextElementSibling.children); // HTMLCollection(4) [div, div, div, script]
const body = document.body;
body.firstElementChild;  // <div>...</div>
body.firstElementChild.childNodes;
console.log(body.firstElementChild.childNodes);// NodeList(9) [text, p, text, p, text, p, text, p, text]
console.log(Array.prototype.slice.call(body.firstElementChild.children, 1, -1));
//DOM.Задачи
//Задание 1
function isParent(parent, child) {
    if (document.querySelector(parent).closest(child) != null) {
        return true
    } else {
        return false
    }
};
//Задание 2
let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));

//Задание 3

//Задаие 4
let count = document.querySelector('ul').children.length;

