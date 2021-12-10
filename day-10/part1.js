import { syntaxCheck } from './Utils';

export default (input) =>
  input
    .split('\n')
    .map(syntaxCheck)
    .reduce((acc, curr) => (curr.isCurropted ? acc + curr.score : acc), 0);
