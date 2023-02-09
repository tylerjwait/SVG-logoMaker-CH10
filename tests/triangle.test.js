const Triangle = require("../lib/triangle")

describe("triangle" , () => {
    it("should return SVG code to display a triangle", () => {
        const obj = new Triangle();
        obj.setColor("green");
        const result = obj.render();
        expect(result).toEqual(`<polygon points="150,25 250,150 50,150" fill="green"/>`);
    })
});