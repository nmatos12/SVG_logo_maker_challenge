class Circle {
    constructor() {
        this.text = '';
    }
    setColor(shapeColor) {
        this.text = `<circle cx='150' cy='100' r='80' fill='${colorShape}' />`;
    }
    render() {
        return this.text;
    }
};

class Square {
    constructor() {
        this.text = '';
    }
    setColor(shapeColor) {
        this.text = `<rect width='100%' height='100%' fill='${shapeColor}' />`;
    }
    render() {
        return this.text;
    }
};

class Triangle {
    constructor() {
        this.text = '';
    }
    setColor(colorShape) {
        this.text = `<polygon points='150,25 250,150 50,150' fill='${colorShape}'/>`;
    }
    render() {
        return this.text;
    }
};

module.exports = { Circle, Square, Triangle };