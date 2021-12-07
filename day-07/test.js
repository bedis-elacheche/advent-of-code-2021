import part1 from './part1';
import part2 from './part2';

const input = '16,1,2,0,4,2,7,1,2,14';

describe('Day 7: The Treachery of Whales', () => {
  it('should return how much fuel spent to align to cheapest position', () => {
    expect(part1(input)).toEqual(37);
  });

  it('should return how much fuel spent to align to cheapest position', () => {
    expect(part2(input)).toEqual(168);
  });
});
