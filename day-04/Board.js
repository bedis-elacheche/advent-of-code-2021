class Board {
  constructor(input) {
    this.value = input.split('\n').map((row) =>
      row
        .trim()
        .replace(/\s\s/g, ' ')
        .split(' ')
        .map((value) => ({
          value: parseInt(value, 10),
          marked: false,
        }))
    );
    this._lastMarkedCell = null;
  }

  get isWinning() {
    for (let i = 0; i < 5; i++) {
      const row = this.value[i];
      const col = this.value.map((row) => row[i]);

      if (row.every((cell) => cell.marked) || col.every((cell) => cell.marked))
        return true;
    }

    return false;
  }

  get lastMarked() {
    if (!this._lastMarkedCell) {
      return null;
    }

    const [i, j] = this._lastMarkedCell;
    return this.value[i][j].value;
  }

  get score() {
    const lastMarked = this.lastMarked;

    if (!this.isWinning || !lastMarked) {
      return 0;
    }

    return (
      this.value.reduce(
        (score, row) =>
          score +
          row.reduce(
            (rowScore, cell) => rowScore + (cell.marked ? 0 : cell.value),
            0
          ),
        0
      ) * lastMarked
    );
  }

  mark(number) {
    this.value.forEach((row, i) =>
      row.forEach((cell, j) => {
        if (cell.value === number) {
          cell.marked = true;
          this._lastMarkedCell = [i, j];
        }
      })
    );

    return this.isWinning;
  }
}

export default Board;
