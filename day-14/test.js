import part1 from './part1';
import part2 from './part2';

const input = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

describe('Day 14: Extended Polymerization', () => {
  it('should return quantity of the most common element minus the quantity of the least common one after 10 steps', () => {
    expect(part1(input)).toBe(1588);
  });

  it('should return quantity of the most common element minus the quantity of the least common one after 40 steps', () => {
    expect(part2(input)).toBe(2188189693529);
  });
});
