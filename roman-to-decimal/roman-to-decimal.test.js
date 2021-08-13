const romanToDecimal = require('./roman-to-decimal');

test('M is 1000 in decimal', () => {
  expect(romanToDecimal('M')).toBe(1000);
});

test('I is 1 in decimal', () => {
  expect(romanToDecimal('I')).toBe(1);
});

test('V is 5 in decimal', () => {
  expect(romanToDecimal('V')).toBe(5);
});
