export default (input) => {
  const measurements = input.split('\n').map(Number);

  let counter = 0;

  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] > measurements[i - 1]) {
      counter++;
    }
  }

  return counter;
};
