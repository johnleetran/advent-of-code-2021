let fs = require('fs');
let data = fs.readFileSync('data.txt', 'utf8')

let dataInput = data.split("\n")
let hori = 0;
let depth = 0;
for(let i=0; i<dataInput.length; i++){
    let d = dataInput[i].split(/\s+/);
    let dir = d[0]
    let val = parseInt(d[1])
    if(dir == 'forward'){
        hori += val;
    }else if(dir == 'down'){
        depth += val
    }else if(dir == 'up'){
        depth -= val
        depth = Math.max(0, depth)
    } 
}

console.log(hori * depth)