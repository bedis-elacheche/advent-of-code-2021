import part1 from './part1';
import part2 from './part2';

const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

describe('Day 2: Dive!', () => {
  it('should multiply final horizontal position and depth', () => {
    expect(part1(input)).toEqual(150);
  });

  it('should multiply final horizontal position and depth considering aim', () => {
    expect(part2(input)).toEqual(900);
  });
});
