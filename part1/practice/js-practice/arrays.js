const t = [1, -1, 3]

//Even though the array 't' was defined as a constant, the array itself can be modified.
//However, the const will always point to that same object (an array in JS is an object).
t.push(5)

//ForEach receives a function with the value as input parameter
t.forEach(value => {
    console.log(value)
})

//In React, the use of FP paradigm is preferred. In FP immutable data structures are a key point.
//Thus in react, array.concat() is preferred over array.push().
//array.concat() creates a new array, does not mutate the original one.

t2 = t.concat(12)

console.log('T:  ', t)
console.log('T2: ', t2)

//One of the useful FP methods defined against an array is Map
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const m1 = t.map(value => value * 2)
console.log('M1: ', m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log('M2: ', m2)

//Destructuring assignment
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const [first, second, ...rest] = t

console.log('---')
console.log('First:  ', first)
console.log('Second: ', second)
console.log('Rest:   ', rest)