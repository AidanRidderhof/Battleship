import { Ship, GameBoard } from ".";

describe("ship class functionality", ()=> {
    beforeEach(() => {
        return ship = new Ship(4)
    });

    test("create ship", ()=> {
        expect(ship.length).toBe(4)
        expect(ship.sunk).toBe(false)
        expect(ship.hits).toBe(0)
    })

    test("hit", () => {
        ship.isHit()
        ship.isHit()
        expect(ship.hits).toBe(2)
    })

    test("isSunk", () => {
        expect(ship.sunk).toBe(false)
        ship.isHit()
        ship.isHit()
        ship.isHit()
        ship.isHit()
        expect(ship.sunk).toBe(true)
    })
})

describe("GameBoard class functionality", () => {
    beforeEach(() => {
        return board = new GameBoard
    });

    test("place ship on board", () => {
        expect(board.board[4][5]).toBe(null)
        board.placeShip(4, 3, 4)
        expect(board.board[3][4]).toBe(1)
        expect(board.board[4][4]).toBe(1)
        expect(board.board[5][4]).toBe(1)
        expect(board.board[6][4]).toBe(1)
    })
})

