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
	return Math.hypot(this.x - pt.x , this.y - pt.y);
    }
}

exports.Point = Point;
