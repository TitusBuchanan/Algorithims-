

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(steps, directions) {
    
    let valley = 0, location = 0;
    //console.log(location)
    for (var i = 0; i < directions.length; i++) {
      if(location === -1 && directions[i] === 'U') ++valley
      directions[i] === 'U' ? ++location : --location
       
    }
    return valley
      
     
      
  }
  console.log(countingValleys(12, 'DDUUDDUDUUUD'));
  // what we want our code to do !!!!!
  // set sl loc val = 0
  // loop thru directions
  //if direction is U then +1 loc
  // if direction is D then -1 loc

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}