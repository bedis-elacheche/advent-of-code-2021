import part1 from './part1';
import part2 from './part2';

const input = `199
200
208
210
200
207
240
269
260
263`;

describe('Day 1: Sonar Sweep', () => {
  it('should calculate how many measurements are larger than the previous', () => {
    expect(part1(input)).toEqual(7);
  });

  it('should calculate how many sums are larger than the previous', () => {
    expect(part2(input)).toEqual(5);
  });
});
