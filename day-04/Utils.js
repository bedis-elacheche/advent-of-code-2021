import Board from './Board';

export const parseInput = (input) => {
  const [numbers, ...boards] = input.split('\n\n');

  return {
    numbers: numbers.split(',').map(Number),
    boards: boards.map((board) => new Board(board)),
  };
};
