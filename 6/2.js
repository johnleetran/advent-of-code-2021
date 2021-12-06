let fs = require('fs');
let input = fs.readFileSync('data.txt', 'utf8')
let data = input.split(",").map((a) => parseInt(a))
// console.log(data)

let maxDay = 256;
let fishMap = {};
for(let d of data){
    if(d in fishMap){
        fishMap[d] += 1;
    }else{
        fishMap[d] = 1;
    }
}

for(let day=0; day < maxDay; day++){
    console.log("day: ", day);
    let copyFishMap = {}//JSON.parse(JSON.stringify(fishMap))
    for (let [key, val] of Object.entries(fishMap)){
        if(key == 0){
            if (copyFishMap[6]){
                copyFishMap[6] += val;
            }else{
                copyFishMap[6] = val;
            }

            if (copyFishMap[8]) {
                copyFishMap[8] += val;
            } else {
                copyFishMap[8] = val;
            }
        }else{
            if ((key - 1) in copyFishMap){
                copyFishMap[key - 1] += val
            }else{
                copyFishMap[key - 1] = val

            }
        }
    }
    fishMap = copyFishMap
}



let fishes = Object.values(fishMap).reduce((prev, cur) => { return prev + cur})
console.log(BigInt(fishes))
