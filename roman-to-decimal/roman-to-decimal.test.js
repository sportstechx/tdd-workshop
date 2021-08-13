const romanToDecimal = require('./roman-to-decimal');

test('I is 1 in decimal', () => {
  expect(romanToDecimal('I')).toBe(1);
});

test('V is 5 in decimal', () => {
  expect(romanToDecimal('V')).toBe(5);
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

test('D is 500 in decimal', () => {
  expect(romanToDecimal('D')).toBe(500);
});

test('M is 1000 in decimal', () => {
  expect(romanToDecimal('M')).toBe(1000);
});

test('II is 2 in decimal', () => {
  expect(romanToDecimal('II')).toBe(2);
});

test('VI is 6 in decimal', () => {
  expect(romanToDecimal('VI')).toBe(6);
});