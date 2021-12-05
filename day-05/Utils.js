import Vector from './Vector';

export const parseInput = (input) => {
  return input.split('\n').map((coordinates) => new Vector(coordinates));
};

export const getDiagramBoundaries = (vectors) => {
  let minX = 0;
  let maxX = 0;
  let minY = 0;
  let maxY = 0;

  vectors.forEach((vector) => {
    minX = Math.min(minX, vector.start.x, vector.end.x);
    minY = Math.min(minY, vector.start.y, vector.end.y);
    maxX = Math.max(maxX, vector.start.x, vector.end.x);
    maxY = Math.max(maxY, vector.start.y, vector.end.y);
  });

  return {
    minX,
    minY,
    maxX,
    maxY,
  };
};
