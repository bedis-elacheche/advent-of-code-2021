export const parse = (input) => {
  const octopuses = input.split('\n').map((line) => line.split('').map(Number));
  const height = octopuses.length;
  const width = octopuses[0].length;

  return {
    total: width * height,
    octopuses,
    height,
    width,
  };
};

export const flashOctopus = (list, x, y, flashed = {}) => {
  const octopus = list?.[y]?.[x];

  const key = `${y},${x}`;

  if (octopus === undefined || flashed[key]) {
    return 0;
  }

  if (octopus < 9) {
    list[y][x] += 1;
    return 0;
  }

  flashed[key] = true;
  list[y][x] = 0;

  return [
    { x: x - 1, y: y - 1 },
    { x: x, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x - 1, y: y },
    { x: x + 1, y: y },
    { x: x - 1, y: y + 1 },
    { x: x, y: y + 1 },
    { x: x + 1, y: y + 1 },
  ].reduce(
    (acc, coords) => acc + flashOctopus(list, coords.x, coords.y, flashed),
    1
  );
};

export const step = (list, height, width) => {
  let flashes = 0;

  const flashed = {};

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      flashes += flashOctopus(list, x, y, flashed);
    }
  }

  return flashes;
};
