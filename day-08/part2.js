const intersectWith = (digit) => (signal) =>
  digit.every((s) => signal.includes(s));

const isContainedInside = (digit) => (signal) =>
  signal.every((s) => digit.includes(s));

const filter = (signals, length) =>
  signals.filter((s) => s.length === length).map((s) => s.split(''));

const without = (arr, item) => {
  const str = Array.isArray(item) ? item.join('') : item;

  return arr.filter((signal) => signal.join('') !== str);
};

const translateDigit = (dict, digit) => {
  const arr = digit.split('');

  return dict.findIndex(
    (value) =>
      arr.length === value.length && arr.every((s) => value.includes(s))
  );
};

const mapOutput = (line) => {
  const [signal, output] = line.split(' | ');
  const signals = signal.split(' ');

  const [one] = filter(signals, 2);
  const [four] = filter(signals, 4);
  const [seven] = filter(signals, 3);
  const [eight] = filter(signals, 7);
  const zeroOrSixOrNine = filter(signals, 6);
  const twoOrThreeOrFive = filter(signals, 5);

  const three = twoOrThreeOrFive.find(intersectWith(one));
  const nine = zeroOrSixOrNine.find(intersectWith(three));

  const zeroOrSix = without(zeroOrSixOrNine, nine);
  const zero = zeroOrSix.find(intersectWith(seven));
  const [six] = without(zeroOrSix, zero);

  const twoOrFive = without(twoOrThreeOrFive, three);
  const five = twoOrFive.find(isContainedInside(nine));
  const [two] = without(twoOrFive, five);

  const dict = [zero, one, two, three, four, five, six, seven, eight, nine];

  return Number(
    output
      .split(' ')
      .map((digit) => translateDigit(dict, digit))
      .join('')
  );
};

export default (input) => {
  const total = input
    .split('\n')
    .reduce((total, line) => total + mapOutput(line), 0);

  return total;
};
