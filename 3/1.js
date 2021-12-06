let fs = require('fs');
let input = fs.readFileSync('data.txt', 'utf8')

let data = input.split("\n")

let gamma = ""
let epsilon = ""

let numRow = data.length
let numCol = data[0].length

for (let i = 0; i < numCol; i++){
    let zeros = 0;
    let ones = 0;
    for (let j = 0; j < numRow; j++){
        if(data[j][i] == '1'){ 
            ones += 1;
        }else{
            zeros += 1;
        }
    }
    if(ones > zeros){
        gamma += '1'
        epsilon += '0'
    }else{
        gamma += '0'
        epsilon += '1'
    }
}


let g = parseInt(gamma, 2)
let e = parseInt(epsilon, 2)
let ans = g * e
console.log(ans)
