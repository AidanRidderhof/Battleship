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

    drawBoard(player1, playerBoard, { revealShips:true })
    drawBoard(com, computerBoard, { revealShips:false })
    
}

function drawBoard(player, board, { revealShips }) {
    player.gameBoard.board.forEach((column, x) => {
        column.forEach((cell, y) => {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("grid-square")
            if (cell instanceof Ship && revealShips) {
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
                if (!revealShips) {
                    gridSquare.addEventListener("click", () => {
                        player.gameBoard.receiveAttack(x, y);
                        board.innerHTML = ''
                        drawBoard(player, board, { revealShips });
                    });
                }
            }
            board.appendChild(gridSquare)
        })
    });
}

function computerTurn() {
    let x = getRandomInt(10)
    let y = getRandomInt[10]

    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}