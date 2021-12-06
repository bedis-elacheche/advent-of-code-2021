export default (input) => {
  const fishes = input.split(',').map(Number);

  for (let day = 0; day < 80; day++) {
    const length = fishes.length;

    for (let i = 0; i < length; i++) {
      fishes[i]--;

      if (fishes[i] < 0) {
        fishes[i] = 6;
        fishes.push(8);
      }
    }
  }

  return fishes.length;
};
