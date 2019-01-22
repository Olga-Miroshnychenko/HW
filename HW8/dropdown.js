let btn = document.querySelector('.dropdown-item');
handler = function () {
    let list = document.querySelector('.dropdown-menu');
    list.classList.toggle("d-none");
};
btn.addEventListener('click', handler);

