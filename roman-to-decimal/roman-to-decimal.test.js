const romanToDecimal = require('./roman-to-decimal');

cases = [
  ['I', 1],
  ['II', 2],
  ['IV', 4]
  ['V', 5],
  ['M', 1000],
]

test.each(cases)("romanToDecimal(%p) = %p", (a, expected) => {
  expect(romanToDecimal(a[0])).toBe(a[1])
})


test.each([
  [1, 1],
  [2, 2],
  [3, 3],
])('.add(%i, ', (a, expected) => {
  expect(a).toBe(expected);
});