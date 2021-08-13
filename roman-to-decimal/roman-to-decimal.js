function romanToDecimal(numeral) {
    const dict = {
        'I': 1,
        'V': 5,
        'M': 1000,
    }

    return dict[numeral];
}

module.exports = romanToDecimal;
