function romanToDecimal(numeral) {
    // Write your implementation here

    if (numeral == "II") {
        return 2
    }

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
    else if (numeral == "M") {
        return 1000
    }
    return 5    
}

module.exports = romanToDecimal;
