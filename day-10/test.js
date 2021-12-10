import part1 from './part1';
import part2 from './part2';

const input = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

describe('Day 10: Syntax Scoring', () => {
  it('should return the sum of the risk levels of all low points', () => {
    expect(part1(input)).toEqual(26397);
  });

  it('should return the product of the sizes of the three largest basins', () => {
    expect(part2(input)).toEqual(288957);
  });
});
