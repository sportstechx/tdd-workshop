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
  {
    roman: 'XLIX',
    decimal: 49
  },
  {
    roman: 'CDIV',
    decimal: 404
  },
  {
    roman: 'XXIV',
    decimal: 24

  },
  {
    roman: 'CMXCIX',
    decimal: 999
  },
  {
    roman: 'L̅X̅X̅X̅X̅V̅I̅I̅I̅DCCLIV',
    decimal: 98754
  },
];

  testProvider.forEach(testCase => {
    test(`convert ${testCase.roman} to ${testCase.decimal}`, () => {
      expect(romanToDecimal(testCase.roman)).toBe(testCase.decimal);
  });
});
