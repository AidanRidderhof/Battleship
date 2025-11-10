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
    }

    placeShip(length, x, y) {
        const ship = new Ship(length)
        for (let i=0; i<ship.length; i++) {
            this.board[x][y] = ship
            x+=1
        }
        this.ships.push(ship)
    }

    recieveAttack(x, y) {
        if (this.board[x][y]) {
            this.board[x][y].isHit()
        }
        this.board[x][y] = 1
    }


}