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
    }

    placeShip(length, x, y) {
        const ship = new Ship(length)
        for (let i=0; i<ship.length; i++) {
            this.board[x][y] = 1
            x+=1
        }
    }


}