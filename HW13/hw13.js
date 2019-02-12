//Задание 1
function promiseCreator(time, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    });
}
const prom = new promiseCreator(500, 'Ok!');
prom.then(console.log);
//Задание 2
class Prom {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        })
    }
    resolve(value) {
        this.resolve(value);
    }
    reject(err) {
        this.reject(err);
    }
}
const inst = new Prom();
inst.promise.then((data) => console.log(data));
inst.resolve('text');
//const inst2 = new Prom();
//inst2.promise.then((data) => console.log(data), (err) => console.log(`Problem is : ${err}`));
//inst2.reject('error');


