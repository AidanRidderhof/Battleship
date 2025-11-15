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

populateBoard()