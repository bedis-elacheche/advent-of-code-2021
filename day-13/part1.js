import Paper from './Paper';

export default (input) => {
  const [dots, instructions] = input.split('\n\n');
  const paper = new Paper(dots);

  instructions
    .split('\n')
    .slice(0, 1)
    .forEach((instruction) => {
      const [axis, index] = instruction.slice(11).split('=');

      paper.fold(axis, +index);
    });

  return paper.markedDots;
};
