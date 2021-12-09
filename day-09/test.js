import part1 from './part1';
import part2 from './part2';

const input = `2199943210
3987894921
9856789892
8767896789
9899965678`;

describe('Day 9: Smoke Basin', () => {
  it('should return the sum of the risk levels of all low points', () => {
    expect(part1(input)).toEqual(15);
  });

  it('should return the product of the sizes of the three largest basins', () => {
    expect(part2(input)).toEqual(1134);
  });
});
