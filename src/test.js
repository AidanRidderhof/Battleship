import { experiments } from "webpack";
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
        board.placeShip(3, 4, 4, 0)
        expect(board.board[3][4]).toBe(board.ships[0])
        expect(board.board[4][4]).toBe(board.ships[0])
        expect(board.board[5][4]).toBe(board.ships[0])
        expect(board.board[6][4]).toBe(board.ships[0])
    })

    test("ship gets attacked", () => {
        board.placeShip(3, 4, 4, 0)
        board.recieveAttack(3, 4)
        expect(board.ships[0].hits).toBe(1)
        board.recieveAttack(4, 4)
        board.recieveAttack(5,4)
        board.recieveAttack(6, 4)
        expect(board.ships[0].sunk).toBe(true)
        expect(board.sunkShips).toBe(1)

    })

    test("vertical ships", () => {
        board.placeShip(2, 5, 3, 1)
        expect(board.checkAllSunk()).toBe(false)
        expect(board.board[2][6]).toBe(board.ships[0])
        board.recieveAttack(2, 5)
        board.recieveAttack(2,6)
        board.recieveAttack(2, 7)
        expect(board.ships[0].sunk).toBe(true)
        expect(board.checkAllSunk()).toBe(true)
    })

    test("cant place ship out of bounds", () => {
        board.placeShip(7, 1, 4, 0)
        expect(board.board[7][1]).toBe(null)
        expect(board.board[8][1]).toBe(null)
        board.placeShip(5, 8, 3, 1)
        expect(board.board[5][8]).toBe(null)
        expect(board.board[5][9]).toBe(null)
    }) 

    test("ships cant overlap", () => {
        board.placeShip(3, 5, 4, 0)
        board.placeShip(5, 4, 3, 1)
        expect(board.board[5][5]).toBe(board.ships[0])
    })
})

