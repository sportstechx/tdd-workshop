const romanToDecimal = require('./roman-to-decimal');

const testProvider = [
  {
    roman: 'VI',
    decimal: 6
  },
  {
    roman: 'V',
    decimal: 5
  },
  {
    roman: 'VII',
    decimal: 7
  },
  {
    roman: 'IX',
    decimal: 9
  },
  {
    roman: 'I',
    decimal: 1
  },
  {
    roman: 'V',
    decimal: 5
  },
  {
    roman: 'X',
    decimal: 10
  },
  {
    roman: 'L',
    decimal: 50
  },
  {
    roman: 'C',
    decimal: 100
  },
  {
    roman: 'D',
    decimal: 500
  },
  {
    roman: 'M',
    decimal: 1000
  },
];

test('convert roman to decimal', () => {
  testProvider.forEach(testCase => {
    expect(romanToDecimal(testCase.roman)).toBe(testCase.decimal);
  });
});
