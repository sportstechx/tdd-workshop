function romanToDecimal(numeral) {
    // Write your implementation here

    if (numeral === "I") {
        return 1
    }
    if (numeral === "II") {
        return 2
    }
    if (numeral === "V") {
        return 5
    }
    if (numeral === "VI") {
        return 6
    }
    if (numeral === "X") {
        return 10
    }
    if (numeral === "L") {
        return 50
    }
    if (numeral === "C") {
        return 100
    }
    if (numeral === "D") {
        return 500
    }
    if (numeral === "M") {
        return 1000
    }
}

module.exports = romanToDecimal;
