import Cave from './Cave';

class Graph {
  constructor() {
    this.caves = {};
  }

  addPath(cave1Id, cave2Id) {
    const cave1 = this.getCaveById(cave1Id);
    const cave2 = this.getCaveById(cave2Id);

    cave1.connect(cave2);
    cave2.connect(cave1);
  }

  getCaveById(id) {
    if (!this.caves[id]) {
      this.caves[id] = new Cave(id);
    }

    return this.caves[id];
  }
}

export default Graph;
