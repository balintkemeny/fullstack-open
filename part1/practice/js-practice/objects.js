//Object literals

const person = {
    name: 'John Doe',
    age: 35,
    occupation: 'lumberjack',
}

//Properties can be referenced with either the dot notation or array bracket notation.

console.log(person.name)
const fieldName = 'age'
console.log(person[fieldName])

//Properties can be added using both notations as well

person.nationality = 'American'
person['weird space in field name'] = 123

