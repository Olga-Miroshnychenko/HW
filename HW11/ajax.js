const url = 'https://jsonplaceholder.typicode.com';

// const xhr = new XMLHttpRequest();
// xhr.open('GET', `${url}/todos`);
// xhr.send();

// xhr.addEventListener('load', () => {
//     console.log(xhr.responseText);
// });

// const xhr2 = new XMLHttpRequest();

// xhr2.open('GET', `${url}/users`);
// xhr2.send();

// xhr2.addEventListener('load', () => {
//     console.log(xhr2.responseText);
// });


class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}

const httpClient = new CustomHttp();

httpClient.get('https://jsonplaceholder.typicode.com/users', (response) => {
    console.log(JSON.parse(response));
});
for (let i = 0; i < temp1.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = temp1[i].name;
    document.body.appendChild(listItem);
};
