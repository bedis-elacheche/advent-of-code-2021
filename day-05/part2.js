import { parseInput, getDiagramBoundaries } from './Utils';
import Diagram from './Diagram';

export default (input) => {
  const vectors = parseInput(input);
  const { minX, minY, maxX, maxY } = getDiagramBoundaries(vectors);
  const diagram = new Diagram(minX, minY, maxX, maxY);

  vectors.forEach((vector) => diagram.mark(vector));

  return diagram.overlaps;
};
