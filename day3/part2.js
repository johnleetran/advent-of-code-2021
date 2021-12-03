let fs = require('fs');
let input = fs.readFileSync('data.txt', 'utf8')

let data = input.split("\n")

function findCriteria(data, oneIsTie) {
    let numRow = data.length
    let numCol = data[0].length

    let found = false
    while (found == false) {
        for (let i = 0; i < numCol; i++) {
            let zerosCount = 0;
            let onesCount = 0;
            let ones = [];
            let zeros = [];
            for (let j = 0; j < numRow; j++) {
                if (data[j][i] == '1') {
                    onesCount += 1;
                    ones.push(data[j])
                } else {
                    zerosCount += 1;
                    zeros.push(data[j])
                }
            }
            if(oneIsTie){
                if (onesCount >= zerosCount) {
                    data = ones
                } else {
                    data = zeros
                }
            }else{
                if (zerosCount <= onesCount) {
                    data = zeros
                } else {
                    data = ones
                }
            }

            numRow = data.length
            if (data.length == 1) {
                found = true
                break;
            }
        }
    }
    return data
}



let oxy = parseInt(findCriteria(JSON.parse(JSON.stringify(data)), true), 2)
let co2 = parseInt(findCriteria(JSON.parse(JSON.stringify(data)), false), 2)

let ans = oxy * co2
console.log(ans)






