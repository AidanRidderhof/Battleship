import { Ship, GameBoard, Player } from "./index";

export function populateBoard() {
    const player1 = new Player
    const com = new Player

    player1.gameBoard.placeShip(2, 2, 4, 0)
    player1.gameBoard.placeShip(7, 4, 3, 1)
    player1.gameBoard.placeShip(0, 0, 1, 1)

    player1.gameBoard.receiveAttack(3, 4)
    player1.gameBoard.receiveAttack(3, 2)

    com.gameBoard.placeShip(2, 2, 4, 0)
    com.gameBoard.placeShip(7, 4, 3, 1)
    com.gameBoard.placeShip(0, 0, 1, 1)




    const playerBoard = document.querySelector("#playerboard")
    const computerBoard = document.querySelector("#computerboard")

    drawPlayerBoard(player1, playerBoard)
    drawComBoard(com, computerBoard)

    
}

function drawPlayerBoard(player, board) {
    player.gameBoard.board.forEach(column => {
        column.forEach(cell => {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("grid-square", "empty-square")
            board.appendChild(gridSquare)
            if (cell instanceof Ship) {
                gridSquare.classList.add("player-ship")
            }
            else if (cell == 1) {
                gridSquare.classList.add("hit-square")
            }
            else if (cell == 2) {
                gridSquare.classList.add("missed-square")
            }
        })
    });
}

function drawComBoard(com, board) {
    com.gameBoard.board.forEach((row, x) => {
        row.forEach((cell, y) => {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("grid-square")

            board.appendChild(gridSquare)

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
                    board.innerHTML = ''
                    drawComBoard(com, board)
                })
            }
        })
    });
}

