const romanToDecimal = require('./roman-to-decimal');

test('V is 5 in decimal', () => {
  expect(romanToDecimal('V')).toBe(5);
});

test('VII is 7 in decimal', () => {
  expect(romanToDecimal('VII')).toBe(7);
});

test('IX is 9 in decimal', () => {
  expect(romanToDecimal('IX')).toBe(9);
});
