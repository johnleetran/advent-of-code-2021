let fs = require('fs');
let data = fs.readFileSync('data.txt', 'utf8')

let dataInput = data.split("\n").map((x)=> parseInt(x))

let prev = Infinity;

let count = 0;
for (let i=0; i<dataInput.length-2; i++) {
    let d = dataInput[i] + dataInput[i + 1] + dataInput[i + 2]
    if (d > prev) {
        count++;
    }
    prev = d;
}
console.log(count)