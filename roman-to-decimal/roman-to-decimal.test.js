const romanToDecimal = require('./roman-to-decimal');

test('V is 5 in decimal', () => {
  expect(romanToDecimal('V')).toBe(5);
});

test('I is 1 in decimal', () => {
  expect(romanToDecimal('I')).toBe(1);
});

