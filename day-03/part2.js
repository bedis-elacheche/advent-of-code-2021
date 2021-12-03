const getRate = (list, callback) => {
  let rate = '';

  while (rate.length < list[0].length) {
    if (list.length === 1) {
      return parseInt(rate);
    }

    const [zero, one] = list.reduce(
      (acc, bits) => {
        const bit = bits[rate.length];

        acc[bit] += 1;

        return acc;
      },
      [0, 0]
    );

    rate += callback(zero, one);

    list = list.filter((bits) => bits.indexOf(rate) === 0);
  }

  return parseInt(rate, 2);
};

export default (input) => {
  const bits = input.split('\n');
  const oxygenGeneratorRate = getRate(bits, (zero, one) =>
    zero > one ? '0' : '1'
  );
  const carbonScrubberRate = getRate(bits, (zero, one) =>
    zero <= one ? '0' : '1'
  );

  return oxygenGeneratorRate * carbonScrubberRate;
};
