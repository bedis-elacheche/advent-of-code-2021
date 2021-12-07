const getFuelConsumption = (positions, to) =>
  positions.reduce((acc, curr) => acc + Math.abs(curr - to), 0);

export default (input) => {
  const positions = input.split(',').map(Number);
  const min = Math.min(...positions);
  const max = Math.max(...positions);

  let minFuelConsumption = Infinity;

  for (let i = min; i <= max; i++) {
    const fuelConsumption = getFuelConsumption(positions, i);
    minFuelConsumption = Math.min(minFuelConsumption, fuelConsumption);
  }

  return minFuelConsumption;
};
