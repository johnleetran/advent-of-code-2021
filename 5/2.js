let fs = require('fs');
let input = fs.readFileSync('data.txt', 'utf8')
let coords = new Array(1000).fill(0).map(() => new Array(1000).fill(0));
let data = input.split("\n")
let countMap = {}

function getCountAtLeastTwo(coords) {
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

for (let d of data) {
    let points = d.split(/\(|,|\s+|\-|>/).filter((a) => { return a.length > 0 })
    let x1 = parseInt(points[0])
    let y1 = parseInt(points[1])
    let x2 = parseInt(points[2])
    let y2 = parseInt(points[3])

    if (x1 == x2) {
        let lo = Math.min(y1, y2)
        let hi = Math.max(y1, y2)

        for (let i = lo; i <= hi; i++) {
            coords[i][x1] += 1;
        }
    } else if (y1 == y2) {
        let lo = Math.min(x1, x2)
        let hi = Math.max(x1, x2)

        for (let i = lo; i <= hi; i++) {
            coords[y1][i] += 1;
        }
    } //3990
    //let slope = Math.abs((y2 - y1) / (x2 - x1))
    // console.log(slope)
    // if(slope == 1){
    else{
        if(x1 < x2){
            if(y1 < y2){
                let y = y1;
                console.log("top-left to bottom-right", points)
                for(let i=x1; i<=x2; i++){
                    coords[y][i] += 1
                    y++;
                }
            }else{
                let y = y1;
                console.log("bottom-left to top-right", points)
                for (let i = x1; i <= x2; i++) {
                    coords[y][i] += 1
                    y--;
                }
            }
        }else{
            if (y1 < y2) {
                let y = y1;
                console.log("top-right to bottom-left", points)
                for (let i = x1; i >= x2; i--) {
                    coords[y][i] += 1
                    y++;
                }
            } else {
                let y = y1;
                console.log("bottom-right to top-left", points)
                for (let i = x1; i >= x2; i--) {
                    coords[y][i] += 1
                    y--;
                }
            }
        }
    }

    
}

if (coords.length <=10)
    console.table(coords)

console.log(getCountAtLeastTwo(coords))

//19889 too low
//21279 too low