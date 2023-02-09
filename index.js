const inquirer = require("inquirer");
const fs = require('fs');
const Circle = require("./lib/circle");
const Triangle = require("./lib/triangle");
const Square = require("./lib/triangle");

function svgContent({text, colorText, shape, colorShape} , shapeContent) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeContent}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${colorText}">${text}</text>
    </svg>`;

}

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "🆘Please enter text for SVG Logo (MAX 3 characters)🆘",
        validate: function(input) {
            if(input.length <= 3) {
                return true;
            }
            else {
                return "Text must be <= 3 characters!"
            }
        }
    },
    {
        type: "list",
        name: "colorText",
        message: "💔💚💙💛🤎Please pick a text color from the list below 👇🏼👇🏼👇🏼",
        choices: ["red", "green", "blue", "yellow", "brown"]
    },
    {
        type: "list",
        name: "shape",
        message: "🖖🏼What type of shape would you like your SVG to be?🖖🏼",
        choices: ["square", "circle", "triangle"]
    },
    {
        type: "input",
        name: "colorShape",
        message: "Please type which color would you like your SVG shape to be?💔💚💙💛🤎",
    },
    
    
])
.then((answers) => {
    var shapeContent = "";
    if(answers.shape == "circle") {
        const circleObj = new Circle();
        circleObj.setColor(answers.colorShape);
        shapeContent = circleObj.render();
    }
    else if(answers.shape == "triangle") {
        const triangelObj = new Triangle();
        triangelObj.setColor(answers.colorShape);
        shapeContent = triangelObj.render();
    }
    else if(answers.shape == "square") {
        const squareObj = new Square();
        squareObj.setColor(answers.colorShape);
        shapeContent = squareObj.render();
    }
    else {
        console.log("ERROR!! NOT A SHAPE");
    }
    const content = svgContent(answers, shapeContent);
    fs.writeFile("Examples/logo.svg", content, (err) => 
        err ? console.log(err) : console.log("SVG CREATED!!✅✅✅✅✅")
    );
})
.catch((error) => {
    console.log("🆘COULD NOT CREATE FILE🆘", error);
})