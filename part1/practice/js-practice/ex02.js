const minimumOfTwo = (a, b) => {
    return a < b ? a : b;
};

const isEven = (n) => {
    if (n === 0) {
        return true;
    }

    if (n === 1) {
        return false;
    }

    if (n < 0) {
        return isEven(n + 2);
    } else {
        return isEven(n - 2);
    }
}

const countChar = (text, char) => {
    let count = 0;
    for (let c of text) {
        if (c == char) count++;
    }
    return count;
};

console.log(minimumOfTwo(-2, 12));
console.log(minimumOfTwo(32, 1));

console.log('Is "6" even: ', isEven(6));
console.log('Is "5" even: ', isEven(5));
console.log('Is "1" even: ', isEven(1));
console.log('Is "0" even: ', isEven(0));
console.log('Is "-4" even: ', isEven(-4));
console.log('Is "-3" even: ', isEven(-3));

console.log(countChar('BeanBeanBeanB', 'B'));