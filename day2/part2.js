let fs = require('fs');
let data = fs.readFileSync('data.txt', 'utf8')

let dataInput = data.split("\n")
let hori = 0;
let depth = 0;
let aim = 0;
for (let i = 0; i < dataInput.length; i++) {
    let d = dataInput[i].split(/\s+/);
    let dir = d[0]
    let val = parseInt(d[1])
    if (dir == 'forward') {
        hori += val;
        depth += aim * val;
    } else if (dir == 'down') {
        aim += val
    } else if (dir == 'up') {
        aim -= val
        aim = Math.max(0, aim)
    }
}

console.log(hori * depth)