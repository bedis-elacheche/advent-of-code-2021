import Graph from './Graph';

const depthFirstSearch = (start, end, visited, currentPath, simplePaths) => {
  if (visited[start.id]) {
    return;
  }

  visited[start.id] = !start.isBig;
  currentPath.push(start);

  if (start.id === end.id) {
    simplePaths.push(currentPath.slice());
    visited[start.id] = false;
    currentPath.pop();
    return;
  }

  start.neighbors.forEach((neighbor) => {
    depthFirstSearch(neighbor, end, visited, currentPath, simplePaths);
  });

  currentPath.pop();
  visited[start.id] = false;
};

export default (input) => {
  const map = new Graph();

  input.split('\n').forEach((line) => {
    const [from, to] = line.split('-');

    map.addPath(from, to);
  });

  const currentPath = [];
  const possiblePaths = [];
  const visited = Object.keys(map.caves).reduce(
    (acc, key) => ({ ...acc, [key]: false }),
    {}
  );

  depthFirstSearch(
    map.caves.start,
    map.caves.end,
    visited,
    currentPath,
    possiblePaths
  );

  return possiblePaths.length;
};
