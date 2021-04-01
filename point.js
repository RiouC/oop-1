// Définit d'une classe Point
class Point {
    constructor(x, y) {
	this.x = x
	this.y = y
    }
    show() {
	console.log(`(${this.x}, ${this.y})`)
    }
    isEqual(point) {
	return this.x === point.x && this.y === point.y ? true : false
    }
    distance(pt) {
	const sqAbscissa = Math.pow(this.x - pt.x, 2);
	const sqOrdinate = Math.pow(this.y - pt.y, 2);
	return Math.sqrt(sqAbscissa + sqOrdinate);
    }
}

exports.Point = Point;
