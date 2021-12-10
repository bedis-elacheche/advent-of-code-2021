export const getSyntaxErrorScore = (char) => {
  const list = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
  };

  return list[char] || 0;
};

export const getCompletionScore = (char) => {
  const list = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
  };

  return list[char] || 0;
};

export const getOpposite = (char) => {
  const list = {
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
    '(': ')',
    ')': '(',
    '<': '>',
    '>': '<',
  };

  return list[char];
};

export const isChunkOpening = (char) => ['[', '{', '(', '<'].includes(char);

export const isChunkClosing = (char) => [']', '}', ')', '>'].includes(char);

export const syntaxCheck = (line) => {
  const array = [line[0]];

  for (let i = 1; i < line.length; i++) {
    const char = line[i];
    if (isChunkClosing(char)) {
      if (getOpposite(array[array.length - 1]) === char) {
        array.pop();
      } else {
        return {
          line,
          array: [],
          isCurropted: true,
          score: getSyntaxErrorScore(char),
        };
      }
    } else if (isChunkOpening(char)) {
      array.push(char);
    }
  }

  return { line, array, isCurropted: false, score: 0 };
};

export const autocomplete = (line) => {
  const completion = [...line.array].reverse().map(getOpposite);
  const completionScore = completion.reduce(
    (acc, char) => acc * 5 + getCompletionScore(char),
    0
  );

  return {
    ...line,
    completion,
    completionScore,
  };
};
