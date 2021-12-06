export default (input) => {
  let fishes = input.split(',');

  const generations = Array.from({ length: 9 }, (_, age) => age).reduce(
    (acc, age) => ({
      ...acc,
      [age]: 0,
    }),
    {}
  );

  for (const num of fishes) {
    generations[num] = generations[num] ? generations[num] + 1 : 1;
  }

  for (let day = 0; day < 256; day++) {
    const nextGeneration = generations[0];
    for (let age = 0; age < 9; age++) {
      generations[age - 1] = generations[age];
    }

    generations[8] = nextGeneration;
    generations[6] += generations[-1];
    delete generations[-1];
  }

  return Object.values(generations).reduce((acc, val) => acc + val);
};
