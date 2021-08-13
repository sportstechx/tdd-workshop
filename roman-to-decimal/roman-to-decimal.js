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

    characters.forEach(character => {
        count+=romanMap[character];
    })
    
    return count;
}

module.exports = romanToDecimal;
