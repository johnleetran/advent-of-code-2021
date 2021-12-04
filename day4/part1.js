let fs = require('fs');
let input = fs.readFileSync('data.txt', 'utf8')

function checkWinner(board, marker){
    //check rows
    for(let i=0; i<5; i++){
        if (marker[i][0] &&
            marker[i][1] &&
            marker[i][2] &&
            marker[i][3] &&
            marker[i][4] ){
                return true
            }
    }

    //check cols
    for (let i = 0; i < 5; i++) {
        if (marker[0][i] &&
            marker[1][i] &&
            marker[2][i] &&
            marker[3][i] &&
            marker[4][i]) {
            return true
        }
    }
    return false;
}

function sumBoard(board, marker) {
    let sum = 0;
    for (let i = 0; i < board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if (marker[i][j] === false){
                sum += parseInt(board[i][j])
            }
        }
    }
    return sum;
}

let data = input.split(/\n/).filter((a) => { return a.length > 0 })

let numbers = data[0].split(",")
let boards = [];
let markers = []

for(let i=1; i<data.length; i+=5){
    let b = [
        data[i].split(/\s/).filter((a) => a.length > 0),
        data[i + 1].split(/\s/).filter((a) => a.length > 0),
        data[i + 2].split(/\s/).filter((a) => a.length > 0),
        data[i + 3].split(/\s/).filter((a) => a.length > 0),
        data[i + 4].split(/\s/).filter((a) => a.length > 0),
    ]
    boards.push(b)
    markers.push(new Array(5).fill(false).map(() => new Array(5).fill(false)))
}

let winner, winningMarker;
let prevNum;
for (let num of numbers){
    let found = false;
    for(let i=0; i<boards.length; i++){
        //let found = false;
        for(let j=0; j<boards[i].length; j++){
            for (let k = 0; k < boards[i][j].length; k++){
                if (boards[i][j][k] == num) {
                    markers[i][j][k] = true;
                }
            }
        }
        for (let i = 0; i < boards.length; i++) {
            let isWinner = checkWinner(boards[i], markers[i])
            if (isWinner) {
                winner = boards[i];
                winningMarker = markers[i];

                prevNum = parseInt(num);
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }
    }
    if (found) {
        break;
    }
}

let sum = sumBoard(winner, winningMarker)

console.log(sum * prevNum)