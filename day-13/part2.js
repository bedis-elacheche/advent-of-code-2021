import Paper from './Paper';

export default (input) => {
  const [dots, instructions] = input.split('\n\n');
  const paper = new Paper(dots);

  instructions.split('\n').forEach((instruction) => {
    const [axis, index] = instruction.slice(11).split('=');

    paper.fold(axis, +index);
  });

  return paper.toString();
};
