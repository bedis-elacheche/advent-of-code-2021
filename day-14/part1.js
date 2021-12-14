const polymerization = (template, rules) => {
  let result = '';

  for (let i = 0; i < template.length - 1; i++) {
    const polymer = template.slice(i, i + 2);

    result = result.slice(0, result.length - 1) + (rules[polymer] || polymer);
  }

  return result;
};

const getElementsList = (polymer) =>
  polymer.split('').reduce(
    (list, element) => ({
      ...list,
      [element]: (list[element] || 0) + 1,
    }),
    {}
  );

export default (input) => {
  const [template, insertions] = input.split('\n\n');
  const insertionsRules = insertions.split('\n').reduce((rules, rule) => {
    const [from, to] = rule.split(' -> ');

    return {
      ...rules,
      [from]: `${from[0]}${to}${from[1]}`,
    };
  }, {});
  let polymer = template;

  for (let i = 0; i < 10; i++) {
    polymer = polymerization(polymer, insertionsRules);
  }

  const elements = getElementsList(polymer);
  const max = Math.max(...Object.values(elements));
  const min = Math.min(...Object.values(elements));

  return max - min;
};
