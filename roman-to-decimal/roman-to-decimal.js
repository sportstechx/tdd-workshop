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
    else if (numeral == "D") {
        return 500
    }
    return 5    
}

module.exports = romanToDecimal;
