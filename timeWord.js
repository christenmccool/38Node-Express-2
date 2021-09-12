function timeWord(str) {
    const numWords = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }
    const tensNumWords = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty"
    }

    const hour24 = +str.slice(0,2);
    const min = +str.slice(3);

    if (hour24 === 0 && min === 0) return "midnight";
    if (hour24 === 12 && min === 0) return "noon";

    const ampm = hour24 < 12 ? "am" : "pm";

    let hour;
    if (hour24 === 0) {
        hour = 12;
    } else if (hour24 > 12) {
        hour = hour24 - 12;
    } else {
        hour = hour24;
    }
    const hourWord = numWords[hour];

    if (min == 0) {
        return `${hourWord} o'clock ${ampm}`;
    }

    let minWord;
    if (min < 10) {
        minWord = `oh ${numWords[min]}`;
    } else if (min < 20) {
        minWord = numWords[min];
    } else {
        const tens = Math.floor(min / 10);
        const ones = min % 10;
        minWord = tensNumWords[tens];
        if (ones !== 0) {
            minWord += ` ${numWords[ones]}`;
        }
    }

    return `${hourWord} ${minWord} ${ampm}`;
}


module.exports = timeWord;