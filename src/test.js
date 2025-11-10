import { Ship } from ".";

test("create ship", ()=> {
    const ship = new Ship(4)
    expect(ship.length).toBe(4)
    expect(ship.sunk).toBe(false)
    expect(ship.hits).toBe(0)
})

test("hit", () => {
    const ship = new Ship(4)
    ship.isHit()
    ship.isHit()
    expect(ship.hits).toBe(2)
})

test("isSunk", () => {
    const ship = new Ship(4)
    expect(ship.sunk).toBe(false)
    ship.isHit()
    ship.isHit()
    ship.isHit()
    ship.isHit()
    expect(ship.sunk).toBe(true)
})