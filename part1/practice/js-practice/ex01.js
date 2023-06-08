const drawTriangle = (height) => {
    for (let i = 0; i < height; i++) {
        console.log('#'.repeat(i+1));
    }
};

const drawTriangleClever = (height) => {
    for (let line = '#'; line.length <= height; line += '#') {
        console.log(line);
    }
};

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 !== 0) {
                console.log('Fizz');
            } else {
                console.log('FizzBuzz');
            } 
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
};

const fizzBuzzNicer = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            console.log(i);
            continue;
        }

        let line = '';
        if (i % 3 === 0) {
            line += 'Fizz';
        }

        if (i % 5 === 0) {
            line += 'Buzz';
        }
        console.log(line);
    }
};

const fizzBuzzClever = () => {
    for (let i = 1; i <= 100; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i);
    }
};

const chessBoard = () => {
    for (let i = 0; i < 8; i++) {
        let line = '';
        for (let j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                line += ' ';
            } else {
                line += '#';
            }
        }
        console.log(line);
    }
};

drawTriangle(7);
drawTriangleClever(8);

fizzBuzzClever();

chessBoard();