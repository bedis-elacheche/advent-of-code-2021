export default (input) => {
  const bits = input.split('\n');

  const length = bits[0].length;
  const counters = Array.from({ length }, () => [0, 0]);

  for (let i = 0; i < bits.length; i++) {
    for (let j = 0; j < length; j++) {
      const bit = bits[i][j];

      counters[j][bit]++;
    }
  }

  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < length; i++) {
    const [a, b] = counters[i];

    if (a > b) {
      gamma += '0';
      epsilon += '1';
    } else {
      gamma += '1';
      epsilon += '0';
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};
