class Diagram {
  constructor(minX, minY, maxX, maxY) {
    const yLength = maxY - minY + 1;
    const xLength = maxX - minX + 1;

    this.values = Array.from({ length: yLength }, () =>
      Array.from({ length: xLength }, () => 0)
    );
  }

  mark(vector) {
    const xDirection = Math.sign(vector.end.x - vector.start.x);
    const yDirection = Math.sign(vector.end.y - vector.start.y);

    let x = vector.start.x;
    let y = vector.start.y;

    if (vector.isHorizontal) {
      for (; x !== vector.end.x + xDirection; x += xDirection) {
        this.values[y][x] += 1;
      }
    } else if (vector.isVertical) {
      for (; y !== vector.end.y + yDirection; y += yDirection) {
        this.values[y][x] += 1;
      }
    } else {
      for (
        ;
        x !== vector.end.x + xDirection && y !== vector.end.y + yDirection;
        x += xDirection, y += yDirection
      ) {
        this.values[y][x] += 1;
      }
    }
  }

  get overlaps() {
    const threshold = 2;

    return this.values.reduce(
      (total, row) =>
        total +
        row.reduce((acc, cell) => (cell >= threshold ? acc + 1 : acc), 0),
      0
    );
  }
}

export default Diagram;
