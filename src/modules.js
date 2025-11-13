import { Ship, GameBoard, Player } from "./index";

export function populateBoard() {
    const player1 = new Player
    const com = new Player

    const playerBoard = document.querySelector("#playerboard")
    const computerBoard = document.querySelector("#computerboard")

    player1.gameBoard.board.forEach(row => {
        row.forEach(cell => {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("grid-square")
            playerBoard.appendChild(gridSquare)
        })
    });

    com.gameBoard.board.forEach(row => {
        row.forEach(cell => {
            const gridSquare = document.createElement("div")
            gridSquare.classList.add("grid-square")
            computerBoard.appendChild(gridSquare)
        })
    });
}

//maybe convert to drawPlayerBoard and drawComBoard