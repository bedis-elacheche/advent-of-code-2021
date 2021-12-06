import part1 from './part1';
import part2 from './part2';

const input = '3,4,3,1,2';

describe('Day 6: Lanternfish', () => {
  it('should return number of lanternfishes', () => {
    expect(part1(input)).toEqual(5934);
  });

  it('should return number of lanternfishes', () => {
    expect(part2(input)).toEqual(26984457539);
  });
});
