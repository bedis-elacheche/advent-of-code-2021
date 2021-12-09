const getLowPoint = (map, x, y) => {
  const min = Math.min(
    ...[
      map[y]?.[x - 1],
      map[y - 1]?.[x],
      map[y]?.[x],
      map[y]?.[x + 1],
      map[y + 1]?.[x],
    ].filter((v) => v !== undefined)
  );

  return min === 9 ? -1 : min;
};

const getBasinSize = (map, { x, y }, value, seen = {}) => {
  const point = map[y]?.[x];
  const key = `${x}-${y}`;

  if (
    seen[key] ||
    point === 9 ||
    point === undefined ||
    Math.abs(point - value) > 2
  ) {
    return 0;
  }

  seen[key] = true;
  const top = { x, y: y - 1 };
  const bottom = { x, y: y + 1 };
  const left = { x: x - 1, y };
  const right = { x: x + 1, y };

  return [top, bottom, left, right].reduce((acc, { x, y }) => {
    return acc + getBasinSize(map, { x, y }, point, seen);
  }, 1);
};

export default (input) => {
  const map = input.split('\n').map((row) => row.split('').map(Number));

  return map
    .reduce((total, row, y) => {
      const rowLowPoints = row.reduce((sub, point, x) => {
        if (point === getLowPoint(map, x, y)) {
          return [...sub, { point, x, y }];
        }

        return sub;
      }, []);

      return [...total, ...rowLowPoints];
    }, [])
    .map(({ point, ...coordinates }) => getBasinSize(map, coordinates, point))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((total, size) => total * size, 1);
};
