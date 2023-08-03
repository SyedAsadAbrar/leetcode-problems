'use strict';

// https://www.hackerrank.com/challenges/counter-game/problem

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'counterGame' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts LONG_INTEGER n as parameter.
 */

function nearestPowerOfTwo(n)
{
    if (n == 0)
        return false;
 
    return Math.pow(2, Math.floor(Math.log(n) / Math.log(2)));
}

function counterGame(n) {
    // Write your code here
    
    let x = n;
    let num = 0;
    let turn = true;
    
    while (x > 1) {
        console.log("x", x);
        num = nearestPowerOfTwo(x);
        if(x !== num){
            x -= num;
        }
        else {
          x /= 2;
        }
        turn = !turn;
    }
    
    return !turn ? 'Louise' : 'Richard';

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = counterGame(n);

        ws.write(result + '\n');
    }

    ws.end();
}
