"use strict";
// interface Person {
//     name: string;
//     age: number;
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(n) {
        this.name = n;
    }
}
let user1;
user1 = {
    name: 'John',
    age: 25,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
};
console.log(user1);
console.log(user1.greet('Hello~'));
