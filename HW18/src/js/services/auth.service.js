import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class AuthService {
    get userId() {
        return localStorage.getItem('sn_user_id');
    }

    get token() {
        return localStorage.getItem('sn_user_token');
    }


    login(email, password) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/login`, { email, password })
                .then((response) => {
                    if (!response.auth) return reject(response);
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }

}
export class AuthService2 {
    registion(email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, { email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year })
                .then((response) => {
                    if (!response.auth) return reject(response);
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}
export class AuthService3 {
    constructor() {

    }
    getUser(token) {
        const http = new Http();
        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/news`, { token })
                .then((response) => {
                    if (!response.auth) return reject(response);
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}