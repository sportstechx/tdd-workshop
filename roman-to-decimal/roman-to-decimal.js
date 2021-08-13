function romanToDecimal(numeral) {
    const dict = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let result = 0;

    while (numeral.length > 0) {
        for (const [key, value] of Object.entries(dict)) {
            if (numeral.startsWith(key)) {
                result += value
                numeral = numeral.slice(key.length, numeral.length)
                break
            }
        }
    }
    return result;
}

module.exports = romanToDecimal;
