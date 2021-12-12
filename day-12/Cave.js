class Cave {
  constructor(id) {
    this.id = id;
    this.isBig = id === id.toUpperCase();
    this.neighbors = [];
  }

  connect(cave) {
    const hasPath = this.neighbors.find((path) => path.id === cave.id);
    if (!hasPath) {
      this.neighbors.push(cave);
    }
  }
}

export default Cave;
