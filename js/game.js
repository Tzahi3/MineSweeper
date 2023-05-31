'use strict'

var gBoard

var gLevel = {
    SIZE: 4,
    MINES: 2
}
var gGamerPos = { i: 2, j: 9 }// only to check the function
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    setMinesNegsCount(gBoard)///only for check the function
}


function buildBoard() {
    var board = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])

        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: true,
            }
        }
    }
    return board
}


function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {

            var currCell = board[i][j]
            var cell

            if (!currCell.isShown) cell = ''
            if (!currCell.isMine) cell = ''
            if (!currCell.isMarked) cell = ''
            if (currCell.minesAroundCount) cell = ''
            const className = `cell cell-${i}-${j}`
            strHTML += `<td class="${className}">${cell}</td>`
        }


    }
    strHTML += '</tr>'

    const elContainer = document.querySelector('.board')
    elContainer.innerHTML = strHTML
}
function setMinesNegsCount(board) {
    var minesAroundCount = 0;
    for (var i = gGamerPos.i - 1; i <= gGamerPos.i + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = gGamerPos.j - 1; j <= gGamerPos.j + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === gGamerPos.i && j === gGamerPos.j) continue;
            var currCell = board[i][j]
            if (currCell.isMine) minesAroundCount++;
        }
    }
}

