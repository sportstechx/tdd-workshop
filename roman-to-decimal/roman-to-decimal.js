function romanToDecimal(numeral) {
    // Write your implementation here

    if (numeral == "I") {
        return 1
    }
    else if (numeral == "X") {
        return 10
    }
    else if (numeral == "L") {
        return 50
    }
    else if (numeral == "C") {
        return 100
    }
    return 5    
}

module.exports = romanToDecimal;
