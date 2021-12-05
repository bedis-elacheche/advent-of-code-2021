class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Vector {
  constructor(coordinates) {
    const [[x1, y1], [x2, y2]] = coordinates
      .split(' -> ')
      .map((c) => c.split(',').map(Number));

    this.start = new Point(x1, y1);
    this.end = new Point(x2, y2);
  }

  get isVertical() {
    return this.start.x === this.end.x;
  }

  get isHorizontal() {
    return this.start.y === this.end.y;
  }
}

export default Vector;
