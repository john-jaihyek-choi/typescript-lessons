// interface Person {
//     name: string;
//     age: number;

//     greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//     name: 'John',
//     age: 25,
//     greet(phrase: string) {
//         console.log(`${phrase} ${this.name}`)
//     }
// };

// console.log(user1);
// console.log(user1.greet('Hello'))

interface Greetable {
    readonly name: string;

    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(n: string) {
        this.name = n;
    }
}

let user1: Person;

user1 = {
    name: 'John',
    age: 25,
    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`)
    }
};

console.log(user1)
console.log(user1.greet('Hello~'))