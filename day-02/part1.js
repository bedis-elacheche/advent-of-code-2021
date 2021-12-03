export default (input) => {
  const course = input.split('\n');
  const { horizontal, depth } = course.reduce(
    (acc, line) => {
      const [direction, value] = line.split(' ');
      const delta = Number(value);

      if (direction === 'up') {
        return {
          ...acc,
          depth: acc.depth - delta,
        };
      }

      if (direction === 'down') {
        return {
          ...acc,
          depth: acc.depth + delta,
        };
      }

      if (direction === 'forward') {
        return {
          ...acc,
          horizontal: acc.horizontal + delta,
        };
      }

      return acc;
    },
    {
      depth: 0,
      horizontal: 0,
    }
  );

  return horizontal * depth;
};
