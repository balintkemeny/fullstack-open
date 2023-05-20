//Modern way: arrow functions

const sum = (a, b) => {
    console.log(a)
    console.log(b)
    return a + b
}

console.log(sum(2, 3))

//In case of a single parameter, we can exclude the brackets

const square = a => {
    console.log(a)
    return a * a
}

//If the function body contains a single expression only, we can omit the curlies as well
//This form is often used with FP constructs like map

const square2 = a => a * a

//Old school JS ways:
//function declaration (most Java-like)

function product(a, b) {
    return a * b
}

//function expression

const average = function(a, b) {
    return (a + b) / 2
}

console.log(average(2, 5))