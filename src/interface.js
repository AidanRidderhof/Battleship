import { populateBoard } from "./modules";
import "./styles.css";

const playerBoard = document.getElementById("playerboard")
const computerBoard = document.getElementById("computerboard")

const resetGame = document.getElementById("reset")

resetGame.addEventListener("click", () => {
    playerBoard.innerHTML=''
    computerBoard.innerHTML=''
    populateBoard()
})

export function updateShipCount(player, com) {
    let p_remaining = player.gameBoard.ships.length - player.gameBoard.sunkShips
    let c_remaining = com.gameBoard.ships.length - com.gameBoard.sunkShips

    const playerScore = document.getElementById("player-score")
    const compScore = document.getElementById("comp-score")

    playerScore.innerText=`Player Ships: ${p_remaining}`
    compScore.innerText=`Computer Ships: ${c_remaining}`

}

export function isOver(player, com) {
    if (com.gameBoard.checkAllSunk()) {
        alert("You Won!")
    }
    else if (player.gameBoard.checkAllSunk()) {
        alert("The Computer Won")
    }
}



populateBoard()