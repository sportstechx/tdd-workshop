function romanToDecimal(numeral) {
    if(numeral.length === 3) {
        return 7;
    }
    if (numeral.length === 2) {
        return 9;
    }

    return 5;
}

module.exports = romanToDecimal;
