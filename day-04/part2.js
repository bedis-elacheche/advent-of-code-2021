import { parseInput } from './Utils';

export default (input) => {
  const { numbers, boards } = parseInput(input);
  const length = numbers.length;
  const numberOfBoards = boards.length;

  let lastWinnningRound = -1;
  let lastWinnningBoard = null;

  for (let i = 0; i < length; i++) {
    const number = numbers[i];
    for (let j = 0; j < numberOfBoards; j++) {
      const board = boards[j];

      if (board.isWinning) {
        continue;
      }

      const isWinning = board.mark(number);

      if (isWinning && i > lastWinnningRound) {
        lastWinnningRound = i;
        lastWinnningBoard = board;
      }
    }
  }

  return lastWinnningBoard ? lastWinnningBoard.score : null;
};
