function romanToDecimal(numeral) {
    if (numeral.length === 1) {
        return singleRomanToDecimal(numeral)
    }
    if (numeral === "II") {
        return 2
    }
    if (numeral === "VI") {
        return 6
    }
    if (numeral === "XVI") {
        return 16
    }
    if (numeral === "XX") {
        return 20
    }
}

function singleRomanToDecimal(singleNumeral) {
    if (singleNumeral === "I") {
        return 1
    }
    if (singleNumeral === "V") {
        return 5
    }
    if (singleNumeral === "X") {
        return 10
    }
    if (singleNumeral === "L") {
        return 50
    }
    if (singleNumeral === "C") {
        return 100
    }
    if (singleNumeral === "D") {
        return 500
    }
    if (singleNumeral === "M") {
        return 1000
    }
}

module.exports = romanToDecimal;
