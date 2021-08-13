const romanToDecimal = require('./roman-to-decimal');

cases = [
  ['I', 1],
  ['II', 2],
  ['V', 5],
  ['M', 1000],
]

test.each(cases)("%p is %p in decimal", (testCase, expected) => {
  expect(romanToDecimal(testCase)).toBe(expected)
})
