import { syntaxCheck, autocomplete } from './Utils';

export default (input) =>
  input
    .split('\n')
    .map(syntaxCheck)
    .filter(({ isCurropted }) => !isCurropted)
    .map(autocomplete)
    .sort((a, b) => b.completionScore - a.completionScore)
    .find((_, index, array) => index > array.length / 2 - 1).completionScore;
