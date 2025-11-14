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

    receiveAttack(x, y) {
        //console.log(x + " " + y)
        if (this.board[x][y] == 1) {
            return false
        }


        if (this.board[x][y]==1) {
            return false
        }
        
        if (this.board[x][y]) {
            this.board[x][y].isHit()
            if (this.board[x][y].sunk) {
                this.sunkShips++
            }
            this.board[x][y] = 1
            
        }
        else {
            this.misses.push([x, y])
            this.board[x][y] = 2
        }
        //this.board[x][y] = 1
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
                //check neighbors [x][y+1], [x+1][y], [x][y-1], [x-1][y]
            }
            else return false
        }
        return true
    }

    checkAllSunk() {
        if (this.sunkShips >= this.ships.length) return true
        return false
    }

    randomlyPlaceShips() {
        let x
        let y 
        let orientation
        let length

        for (let i=0; i<10; i++) {
            x = getRandomInt(10)
            y = getRandomInt(10)
            orientation = getRandomInt(2)
            if (i==0) {
                length = 4
            }
            else if (i<=2) {
                length = 3
            }
            else if (i<=5) {
                length = 2
            }
            else {
                length = 1
            }
            if (!this.shipIsLegal(x, y, length, orientation)) {
                i--
            }
            else {
                this.placeShip(x, y, length, orientation)
            }
        }

        //1 4long
        //2 3long
        //3 2long
        //4 1long

    }

}

export class Player {
    constructor() {
        this.gameBoard = new GameBoard
    }
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}