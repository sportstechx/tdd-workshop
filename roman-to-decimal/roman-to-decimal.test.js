const romanToDecimal = require('./roman-to-decimal');

test('V is 5 in decimal', () => {
  expect(romanToDecimal('V')).toBe(5);
});

test('I is 1 in decimal', () => {
  expect(romanToDecimal('I')).toBe(1);
});

test('X is 10 in decimal', () => {
  expect(romanToDecimal('X')).toBe(10);
});

test('L is 50 in decimal', () => {
  expect(romanToDecimal('L')).toBe(50);
});


test('C is 100 in decimal', () => {
  expect(romanToDecimal('C')).toBe(100);
});
