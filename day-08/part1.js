export default (input) => {
  const total = input.split('\n').reduce((total, line) => {
    const output = line.split(' | ')[1];

    return (
      total +
      output.split(' ').reduce((outputTotal, signal) => {
        const is1 = signal.length === 2;
        const is4 = signal.length === 4;
        const is7 = signal.length === 3;
        const is8 = signal.length === 7;

        return outputTotal + (is1 | is4 | is7 | is8 ? 1 : 0);
      }, 0)
    );
  }, 0);

  return total;
};
