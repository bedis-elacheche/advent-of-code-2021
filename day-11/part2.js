import { parse, step } from './Utils';

export default (input) => {
  const { octopuses, width, height, total } = parse(input);

  let i = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const flashes = step(octopuses, height, width);

    i++;

    if (flashes === total) {
      return i;
    }
  }
};
