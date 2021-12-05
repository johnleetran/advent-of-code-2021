let fs = require('fs');
let input = fs.readFileSync('data.txt', 'utf8')

let coords = new Array(989).fill(0).map(() => new Array(989).fill(0));
let data = input.split("\n")
let countMap = {}

function getCountAtLeastTwo(coords){
    let count = 0;
    for (let row = 0; row < coords.length; row++) {
        for (let col = 0; col < coords[row].length; col++) {
            if (coords[row][col] >= 2) {
                count++;
            }
        }
    }
    return count;
}

for(let d of data){
    let points = d.split(/\(|,|\s+|\-|>/).filter((a) => { return a.length > 0 })
    let x1 = parseInt(points[0])
    let y1 = parseInt(points[1])
    let x2 = parseInt(points[2])
    let y2 = parseInt(points[3])

    if(x1 == x2){
        let lo = Math.min(y1, y2)
        let hi = Math.max(y1, y2)

        for(let i=lo; i<=hi; i++){
            coords[i][x1] += 1; 
        }
    }else if(y1 == y2){
        let lo = Math.min(x1, x2)
        let hi = Math.max(x1, x2)

        for (let i = lo; i <= hi; i++) {
            coords[y1][i] += 1;
        }
    }
}

// console.table(coords)

console.log(getCountAtLeastTwo(coords))