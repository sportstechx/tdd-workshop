const romanToDecimal = require('./roman-to-decimal');

// cases = [
//   ['I', 1],
//   ['II', 2],
//   ['IV', 4]
//   ['V', 5],
//   ['M', 1000],
// ]

// test.each(cases)("romanToDecimal(%p) = %p", (a, expected) => {
//   expect(romanToDecimal(a[0])).toBe(a[1])
// })

test('romanToDecimal(i) should return 1', () => {
  expect(romanToDecimal('I')).toBe(1)
})

test('romanToDecimal(i) should return 2', () => {
  expect(romanToDecimal('II')).toBe(2)
})

test('romanToDecimal(i) should return 4', () => {
  expect(romanToDecimal('IV')).toBe(4)
})

test('romanToDecimal(i) should return 1', () => {
  expect(romanToDecimal('V')).toBe(5)
})

test('romanToDecimal(i) should return 1', () => {
  expect(romanToDecimal('M')).toBe(1000)
})

test('romanToDecimal(i) should return 9', () => {
  expect(romanToDecimal('IX')).toBe(9)
})

test('romanToDecimal(i) should return 40', () => {
  expect(romanToDecimal('XL')).toBe(40)
})

test('romanToDecimal(LXI) should return 61', () => {
  expect(romanToDecimal('LXI')).toBe(61)
})

test('romanToDecimal(XC) should return 90', () => {
  expect(romanToDecimal('XC')).toBe(90)
})

test('romanToDecimal(XCVIII) should return 98', () => {
  expect(romanToDecimal('XCVIII')).toBe(98)
})

test('romanToDecimal(CD) should return 400', () => {
  expect(romanToDecimal('CD')).toBe(400)
})


test('romanToDecimal(CDIV) should return 404', () => {
  expect(romanToDecimal('CDIV')).toBe(404)
})

test('romanToDecimal(CMXCIX) should return 999', () => {
  expect(romanToDecimal('CMXCIX')).toBe(999)
})

test('romanToDecimal(MCMXCIX) should return 1999', () => {
  expect(romanToDecimal('MCMXCIX')).toBe(1999)
})