import { parse, step } from './Utils';

export default (input) => {
  const { octopuses, width, height } = parse(input);

  let flashes = 0;

  for (let i = 0; i < 100; i++) {
    flashes += step(octopuses, height, width);
  }

  return flashes;
};
