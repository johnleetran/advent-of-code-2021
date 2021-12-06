let fs = require('fs');
let input = fs.readFileSync('data.txt', 'utf8')
let data = input.split(",").map((a) => parseInt(a))
// console.log(data)

let maxDay = 80;
for(let day=0; day<maxDay; day++){
    let numNewFishCount = 0; 
    for (let i = 0; i < data.length; i++) {
        if(data[i] == 0){
            data[i] = 6;
            numNewFishCount++;
        }else{
            data[i] = data[i] - 1;
        }
        
    }
    for(let i=0; i<numNewFishCount; i++){
        data.push(8)
    }
}

console.log(data.length)
