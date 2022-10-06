class Shape {
  #pi;
  shape;

  constructor(shape) {
    this.#pi = 3.14;
    this.shape = shape;
  }

  static side(side) {
    return isNaN(side);
  }

  shapeDetail() {
    console.log(this.shape);
  }
}

class Circle extends Shape {
  #ans = 0;
  constructor(shape) {
    super(shape);
  }

  static isValid(height, length, breadth) {
    return Circle.side(height) || Circle.side(length) || Circle.side(breadth);
  }

  area(height, length, breadth) {
    if (Circle.isValid(height, length, breadth)) {
      throw new Error("Please enter valid sides...");
    }

    this.#ans = 2 * height * (length + breadth);
    return this.#ans;
  }
}

let c1 = new Circle("i am cuboide");

console.log(c1.area(1, 1, 1));
