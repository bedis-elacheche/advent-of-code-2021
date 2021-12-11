import part1 from './part1';
import part2 from './part2';

const input = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;

describe('Day 11: Dumbo Octopus', () => {
  it('should return the number of total flashes after 100 steps', () => {
    expect(part1(input)).toEqual(1656);
  });

  it('should return the first step during which all octopuses flash', () => {
    expect(part2(input)).toEqual(195);
  });
});
