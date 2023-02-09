const Circle = require("../lib/circle")

describe("circle" , () => {
    it("should return SVG code to display a circle", () => {
        const obj = new Circle();
        obj.setColor("red");
        const result = obj.render();
        expect(result).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
    })
});