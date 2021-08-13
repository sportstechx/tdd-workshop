const romanToDecimal = require('./roman-to-decimal');

test.each([
  ['I', 1],
  ['II', 2],
  ['IV', 4],
  ['V', 5],
  ['IX', 9],
  ['XLII', 42],
  ['LXI', 61],
  ['XC', 90],
  ['XCVIII', 98],
  ['CD', 400],
  ['CDIV', 404],
  ['CMXCIX', 999],
  ['M', 1000],
  ['MCMXCIX', 1999],
])('romanToDecimal(%p) should be %p', (romanNumber, decimalNumber) => {
  expect(romanToDecimal(romanNumber)).toBe(decimalNumber)
})
