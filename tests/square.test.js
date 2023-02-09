const Square = require("../lib/square")

describe("square" , () => {
    it("should return SVG code to display a square", () => {
        const obj = new Square();
        obj.setColor("blue");
        const result = obj.render();
        expect(result).toEqual(`<rect width="100%" height="100%" fill="blue" />`);
    })
});