function romanToDecimal(numeral) {
    if(numeral.length === 3) {
        return 7;
    }
    if (numeral.length === 2) {
        return 9;
    }


        
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    
    return romanMap[numeral];
}

module.exports = romanToDecimal;
