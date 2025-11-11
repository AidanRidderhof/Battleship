import "./styles.css";

export class Ship {
    constructor(length) {
        this.length = length
        this.hits = 0
        this.sunk = false

    }

    isHit() {
        this.hits += 1
        this.isSunk()
    }

    isSunk() {
        if (this.hits>=this.length) {
            this.sunk = true
        }
    }
}

export class GameBoard {
    constructor() {
        this.board = Array.from({ length: 10 }, () => 
            Array(10).fill(null)
        );
        this.ships=[]
        this.misses = []
        this.sunkShips = 0
    }

    placeShip(x, y, length, orientation) {
        const ship = new Ship(length)
        if (this.shipIsLegal(x, y, length, orientation)) {
            if (orientation===0) { //horizontal
                for (let i=0; i<ship.length; i++) {
                    this.board[x][y] = ship
                    x++
                }
            }
            else { //vertical
                for (let i=0; i<ship.length; i++) {
                    this.board[x][y] = ship
                    y++
                }
            }
            
            this.ships.push(ship)
        }
    }

    recieveAttack(x, y) {
        if (this.board[x][y]) {
            this.board[x][y].isHit()
            if (this.board[x][y].sunk) {
                this.sunkShips++
            }
        }
        else {
            this.misses.push([x, y])
        }
        this.board[x][y] = 1
    }

    //see legality of ship placement
    shipIsLegal(x, y, length, orientation) {
        let z = null
        //is ship out of bounds
        if (x < 0 || y< 0 || x >9 || y> 9) return false
        orientation ? z = y+length : z = x+length
        if (z < 0 || z > 10) return false
        //does ship have overlap
        for (let i=0; i<length; i++) {
            if (this.board[x][y] == null) {
                orientation ? y++ : x++
            }
            else return false
        }
        return true
    }

    checkAllSunk() {
        if (this.sunkShips >= this.ships.length) return true
        return false
    }

}

class Player {
    constructor(name) {
        this.name = name
        this.gameBoard = new GameBoard
    }
}