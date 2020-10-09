const person = {
    age: 30,
    name: "John",
    hobbies: ['Sports', 'Cooking']
};

for(let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.name);

