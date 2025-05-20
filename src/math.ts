const addNumbers = (a: number, b: number): number => {
  return a + b;
};
const subNumbers = (a: number, b: number): number => {
  return a - b;
};

module.exports = {
  add: addNumbers,
  sub: subNumbers,
};
