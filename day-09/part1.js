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

export default (input) => {
  const map = input.split('\n').map((row) => row.split('').map(Number));

  return map.reduce((total, row, y) => {
    const rowLowPointsSum = row.reduce((sub, point, x) => {
      if (point === getLowPoint(map, x, y)) {
        return sub + point + 1;
      }

      return sub;
    }, 0);

    return total + rowLowPointsSum;
  }, 0);
};
