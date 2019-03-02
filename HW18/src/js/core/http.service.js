import { AuthService } from './../services/auth.service';
export class Http {
    post(url, data, options) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    get(url, callback) {

        return new Promise((resolve, reject) => {
            fetch(url, callback)
                .then((response) => response.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.setRequestHeader('x-access-token', AuthService.token);
            xhr.send();
            //xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
        });
    }
}
