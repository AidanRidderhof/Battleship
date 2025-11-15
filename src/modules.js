import { Ship, GameBoard, Player, getRandomInt } from "./index";

export function populateBoard() {
    const player1 = new Player
    const com = new Player

    player1.gameBoard.randomlyPlaceShips()

    com.gameBoard.randomlyPlaceShips()

    const playerBoard = document.querySelector("#playerboard")
    const computerBoard = document.querySelector("#computerboard")

    drawPlayerBoard(player1, playerBoard)
    drawComBoard(com, computerBoard, player1, playerBoard)

    
}

export function drawPlayerBoard(player, board) {
    player.gameBoard.board.forEach((column, x) => {
        column.forEach((cell, y) => {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("grid-square")
            if (cell instanceof Ship) {
                gridSquare.classList.add("player-ship")
            }
            else if (cell == 1) {
                gridSquare.classList.add("hit-square")
            }
            else if (cell == 2) {
                gridSquare.classList.add("missed-square")
            }
            else {
                gridSquare.classList.add("empty-square")
            }
            board.appendChild(gridSquare)
        })
    });
}

function drawComBoard(com, comBoard, player, playerBoard) {
    console.log(player)
    com.gameBoard.board.forEach((column, x) => {
        column.forEach((cell, y) => {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("grid-square")

            comBoard.appendChild(gridSquare)

            if (cell == 1) {
                gridSquare.classList.add("hit-square")
            }
            else if (cell == 2) {
                gridSquare.classList.add("missed-square")
            }
            else {
                gridSquare.classList.add("empty-square")
                gridSquare.addEventListener("click", () => {
                    com.gameBoard.receiveAttack(x, y)
                    comBoard.innerHTML = ''
                    drawComBoard(com, comBoard, player, playerBoard)
                    computerTurn(player, playerBoard)
                })
            }
            comBoard.appendChild(gridSquare)
        })
    });
}
 

function computerTurn(player, playerBoard) {
    let x = getRandomInt(10)
    let y = getRandomInt(10)
    
    while (1) {
        if (player.gameBoard.board[x][y]==1 || player.gameBoard.board[x][y]==2) {
            x = getRandomInt(10)
            y = getRandomInt(10)
        }
        else {
            break
        }
    }

    player.gameBoard.receiveAttack(x,y)
    playerBoard.innerHTML=''
    drawPlayerBoard(player, playerBoard)

}

