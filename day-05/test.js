import part1 from './part1';
import part2 from './part2';

const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;

describe('Day 5: Hydrothermal Venture', () => {
  it('Without diagonal lines: should return number of points where at least two lines overlap', () => {
    expect(part1(input)).toEqual(5);
  });

  it('With diagonal lines: should return number of points where at least two lines overlap', () => {
    expect(part2(input)).toEqual(12);
  });
});
