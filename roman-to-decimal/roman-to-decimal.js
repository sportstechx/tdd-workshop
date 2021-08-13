function romanToDecimal(numeral) {
    const dict = {
        'I': 1,
        'V': 5,
        'M': 1000,
    }
    return numeral.split('')
        .reduce((acc, current) => acc + dict[current], 0);
}

module.exports = romanToDecimal;
