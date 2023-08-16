class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;

    const [side1, side2, side3] = this.sides;
    return (
      side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1
    );
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false;

    return this.sides.every((side) => side === this.sides[0]);
  }

  get area() {
    if (!this.isValid) return undefined;
    return this.sides[0] ** 2;
  }
}

// Testing the classes
const triangle = new Triangle([3, 4, 5]);
console.log("Triangle Perimeter:", triangle.perimeter); // Should be 12
console.log("Triangle isValid:", triangle.isValid); // Should be true

const square = new Square([4, 4, 4, 4]);
console.log("Square Perimeter:", square.perimeter); // Should be 16
console.log("Square isValid:", square.isValid); // Should be true
console.log("Square Area:", square.area); // Should be 16

const invalidTriangle = new Triangle([1, 2, 3]);
console.log("Invalid Triangle isValid:", invalidTriangle.isValid); // Should be false

const invalidSquare = new Square([3, 3, 3, 3]);
console.log("Invalid Square isValid:", invalidSquare.isValid); // Should be false
console.log("Invalid Square Area:", invalidSquare.area); // Should be undefined
