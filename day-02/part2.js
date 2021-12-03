export default (input) => {
  const course = input.split('\n');
  const { horizontal, depth } = course.reduce(
    (acc, line) => {
      const [direction, value] = line.split(' ');
      const delta = Number(value);

      if (direction === 'up') {
        return {
          ...acc,
          aim: acc.aim - delta,
        };
      }

      if (direction === 'down') {
        return {
          ...acc,
          aim: acc.aim + delta,
        };
      }

      if (direction === 'forward') {
        return {
          ...acc,
          horizontal: acc.horizontal + delta,
          depth: acc.depth + acc.aim * delta,
        };
      }

      return acc;
    },
    {
      aim: 0,
      depth: 0,
      horizontal: 0,
    }
  );

  return horizontal * depth;
};
