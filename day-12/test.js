import part1 from './part1';
import part2 from './part2';

const input1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const input2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

const input3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

describe('Day 12: Passage Pathing', () => {
  it('should return the number paths that visit small caves at most once', () => {
    expect(part1(input1)).toEqual(10);
    expect(part1(input2)).toEqual(19);
    expect(part1(input3)).toEqual(226);
  });

  it('should return the number paths that visit a single small caves at most once', () => {
    expect(part2(input1)).toEqual(36);
    expect(part2(input2)).toEqual(103);
    expect(part2(input3)).toEqual(3509);
  });
});
