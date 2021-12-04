import { parseInput } from './Utils';

export default (input) => {
  const { numbers, boards } = parseInput(input);
  const length = numbers.length;
  const numberOfBoards = boards.length;

  for (let i = 0; i < length; i++) {
    const number = numbers[i];
    for (let j = 0; j < numberOfBoards; j++) {
      const board = boards[j];
      const isWinning = board.mark(number);

      if (isWinning) {
        return board.score;
      }
    }
  }

  return null;
};
