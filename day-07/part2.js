const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const n = args[0];

    if (n in cache) {
      return cache[n];
    }

    const result = fn(...args);
    cache[n] = result;

    return result;
  };
};

const getRangeConsumption = memoize((range) =>
  Array.from({ length: range }, (_, i) => i + 1).reduce((s, a) => s + a, 0)
);

const getFuelConsumption = memoize((to, positions) =>
  positions.reduce(
    (acc, curr) => acc + getRangeConsumption(Math.abs(curr - to)),
    0
  )
);

export default (input) => {
  const positions = input.split(',').map(Number);
  const min = Math.min(...positions);
  const max = Math.max(...positions);

  let minFuelConsumption = Infinity;

  for (let i = min; i <= max; i++) {
    const fuelConsumption = getFuelConsumption(i, positions);
    minFuelConsumption = Math.min(minFuelConsumption, fuelConsumption);
  }

  return minFuelConsumption;
};
