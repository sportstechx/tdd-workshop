function romanToDecimal(numeral) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    const characters = numeral.split('');
    let count = 0;

    let previous = 0;

    characters.forEach(character => {
        const charValue = romanMap[character];
        count += charValue;

        if (previous < charValue) {
            count = charValue - previous;
        }

        previous = charValue;
    })


    
    return count;
}

module.exports = romanToDecimal;
