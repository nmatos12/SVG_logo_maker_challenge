const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

const svgData = function({text, textColor, shape, shapeColor} , shapeData) {
    return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>

    ${shapeData}

    <text x='150' y='125' font-size='60' text-anchor='middle' fill='${textColor}'>${text}</text></svg>`;
};

const prompt = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape for your logo',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color for your logo (Please enter using hex color value or color name)',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Please enter the text for your logo (You may only use up to 3 characters)',
            validate: function(input) {
                if(input.length <= 3) {
                    return true;
                }
                else {
                    return 'Your text must only be 3 characters long or less'
                }
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter a color for your text (Please enter using hex color value or color name)',
        },
    ])
    .then((answers) => {
        var shapeData = '';
        if(answers.shape == 'circle') {
            const circleObj = new Circle();
            circleObj.setColor(answers.shapeColor);
            shapeData = circleObj.render();
        }
        else if(answers.shape == 'square') {
            const squareObj = new Square();
            squareObj.setColor(answers.shapeColor);
            shapeData = squareObj.render();
        }
        else if(answers.shape == 'triangle') {
            const triangelObj = new Triangle();
            triangelObj.setColor(answers.shapeColor);
            shapeData = triangelObj.render();
        }
        else {
            console.log('Please choose a shape', error);
        }
        const data = svgData(answers, shapeData);
        fs.writeFile('logo.svg', data, (error) => {
            if (error) {
                return console.log(error);
            }
            else {
                console.log('New logo generated');
            }
        });
        fs.writeFile('./examples/svg.html', data, (error) => {
            if (error) {
                return console.log(error);
            }
            else {
                console.log('New logo html generated');
            }
        });
    })
    .catch((error) => {
        console.log('Unable to generate logo', error);
    });
}

prompt();

