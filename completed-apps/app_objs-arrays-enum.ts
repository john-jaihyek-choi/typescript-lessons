enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    age: 30,
    name: "John",
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

for(let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.name);
