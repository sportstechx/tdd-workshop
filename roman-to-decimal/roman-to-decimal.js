function romanToDecimal(numeral) {
    const dict = {
        'IV': 4,
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    let result = 0;

    console.log(numeral)
    // while (numeral.length > 0) {
    //     Object.keys(dict).forEach((value) => {
    //         console.log(numeral)
    //         if (numeral.startsWith(value)) {
    //             result += dict[value]
    //             numeral = numeral.slice(value.length)
    //         }
    //     })
    // }

    // // LCIX

    // const acc = {
    //     result: 0,
    //     roman: numeral,
    // }

    // return numeral.reduce((_acc, current) => {

    // }, acc);
}

module.exports = romanToDecimal;
