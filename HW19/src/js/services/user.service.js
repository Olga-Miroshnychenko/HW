import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class UserService {
    getUser(id) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/users/get-info/${id}`)
                .then((response) => {
                    console.log(response);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}
export class LikeService {
    getUrl(url) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/winners?part = 1&limit = 15`, url)
                .then((response) => {
                    console.log(response);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}