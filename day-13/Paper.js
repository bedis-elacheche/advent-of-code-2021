class Paper {
  constructor(input) {
    let height = 0;
    let width = 0;

    const dots = input.split('\n').map((dot) => {
      const [x, y] = dot.split(',').map(Number);

      width = Math.max(width, x + 1);
      height = Math.max(height, y + 1);

      return { x, y };
    });

    this.dots = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => false)
    );

    dots.forEach(({ x, y }) => {
      this.dots[y][x] = true;
    });
  }

  get markedDots() {
    return Object.values(this.dots).reduce(
      (acc, row) =>
        acc + (row ? Object.values(row).filter((dot) => dot).length : 0),
      0
    );
  }

  fold(axis, index) {
    return axis === 'y' ? this.foldUp(index) : this.foldLeft(index);
  }

  foldUp(position) {
    const upperHalf = this.dots.slice(0, position).reverse();
    const lowerHalf = this.dots.slice(position + 1);

    lowerHalf.forEach((row, y) => {
      row.forEach((column, x) => {
        upperHalf[y][x] = column || upperHalf[y][x];
      });
    });

    this.dots = upperHalf.reverse();
  }

  foldLeft(position) {
    this.dots = this.dots.map((row) => {
      const leftHalf = row.slice(0, position).reverse();
      const rightHalf = row.slice(position + 1);

      rightHalf.forEach((column, x) => {
        leftHalf[x] = column || leftHalf[x];
      });

      return leftHalf.reverse();
    });
  }

  toString() {
    return this.dots
      .map((row) => row.map((dot) => (dot ? '█' : ' ')).join(''))
      .join('\n');
  }
}

export default Paper;
