const { Circle, Square, Triangle } = require('./shapes');

describe('circle' , () => {
    it('should return the line of code that makes a circle', () => {
        const obj = new Circle();
        obj.setColor('red');
        const result = obj.render();
        expect(result).toEqual(`<circle cx='150' cy='100' r='90' fill='red' />`);
    })
});

describe('square' , () => {
    it('should return the line of code that makes a square', () => {
        const obj = new Square();
        obj.setColor('blue');
        const result = obj.render();
        expect(result).toEqual(`<rect x='50' y='20' width='200' height='170' fill='blue' />`);
    })
});

describe('triangle' , () => {
    it('should return the line of code that makes a triangle', () => {
        const obj = new Triangle();
        obj.setColor('green');
        const result = obj.render();
        expect(result).toEqual(`<polygon points='150,0 270,170 30,170' fill='green'/>`);
    })
});