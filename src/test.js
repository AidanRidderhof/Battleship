import { Ship } from ".";

test("create ship", ()=> {
    const ship = new Ship(4)
    expect(ship.length).toBe(4)
    expect(ship.sunk).toBe(false)
    expect(ship.hits).toBe(0)
})