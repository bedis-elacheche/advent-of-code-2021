const decompose = (template) => {
  const list = {};

  for (let i = 0; i < template.length - 1; i++) {
    const polymer = template.slice(i, i + 2);

    list[polymer] = (list[polymer] || 0) + 1;
  }

  return list;
};

const polymerization = (template, rules, elements) => {
  return Object.entries(template).reduce((list, [polymer, count]) => {
    if (rules[polymer]) {
      const result = rules[polymer];
      const first = `${polymer[0]}${result}`;
      const second = `${result}${polymer[1]}`;

      elements[result] = (elements[result] || 0) + count;

      return {
        ...list,
        [first]: (list[first] || 0) + count,
        [second]: (list[second] || 0) + count,
      };
    }

    return list;
  }, {});
};

const getElementsList = (polymer) =>
  polymer.split('').reduce((list, element) => {
    return {
      ...list,
      [element]: (list[element] || 0) + 1,
    };
  }, {});

export default (input) => {
  const [template, insertions] = input.split('\n\n');
  const insertionsRules = insertions.split('\n').reduce((rules, rule) => {
    const [from, to] = rule.split(' -> ');

    return {
      ...rules,
      [from]: to,
    };
  }, {});
  const elements = getElementsList(template);
  let polymer = decompose(template);

  for (let i = 0; i < 40; i++) {
    polymer = polymerization(polymer, insertionsRules, elements);
  }

  const max = Math.max(...Object.values(elements));
  const min = Math.min(...Object.values(elements));

  return max - min;
};
