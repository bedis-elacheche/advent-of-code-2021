const sum = (array, start, limit = 3) =>
  array.slice(start, start + limit).reduce((a, b) => a + b);

export default (input) => {
  const measurements = input.split('\n').map(Number);

  let counter = 0;

  for (let i = 1; i < measurements.length; i++) {
    if (sum(measurements, i) > sum(measurements, i - 1)) {
      counter++;
    }
  }

  return counter;
};
