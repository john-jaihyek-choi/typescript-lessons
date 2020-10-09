var person = {
    age: 30,
    name: "John",
    hobbies: ['Sports', 'Cooking']
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
console.log(person.name);
