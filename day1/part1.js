let fs = require('fs');
let data = fs.readFileSync('data.txt', 'utf8')

let dataInput = data.split("\n")

let prev = Infinity;
let count = 0;
for(let d of dataInput){
    d = parseInt(d)
    if(d > prev){
        count++;
    }
    prev = d;
}
console.log(count)