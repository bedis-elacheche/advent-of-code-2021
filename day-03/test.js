import part1 from './part1';
import part2 from './part2';

const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

describe('Day 3: Binary Diagnostic', () => {
  it('should compute power consumption of the submarine', () => {
    expect(part1(input)).toEqual(198);
  });

  it('should compute life support rating of the submarine', () => {
    expect(part2(input)).toEqual(230);
  });
});
