import Graph from './Graph';

const depthFirstSearch = (start, end, visited, currentPath, simplePaths) => {
  let cannotVisit = false;

  if (start.id === 'start' || start.id === 'end') {
    cannotVisit = currentPath.find((path) => path.id === start.id);
  } else if (!start.isBig) {
    if (visited[start.id] > 1) {
      cannotVisit = true;
    } else if (visited[start.id] === 1) {
      cannotVisit = !!Object.keys(visited).find((key) => visited[key] === 2);
    }
  }

  if (cannotVisit) {
    return;
  }

  visited[start.id] += start.isBig ? 0 : 1;
  currentPath.push(start);

  if (start.id === end.id) {
    simplePaths.push(currentPath.slice());
    visited[start.id] -= 1;
    currentPath.pop();
    return;
  }

  start.neighbors.forEach((neighbor) => {
    depthFirstSearch(neighbor, end, visited, currentPath, simplePaths);
  });

  currentPath.pop();
  visited[start.id] -= 1;
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
    (acc, key) => ({ ...acc, [key]: 0 }),
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
