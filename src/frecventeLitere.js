const sampleString = 'the quick brown fox jumps over the lazy dog';

const letterFrequency = (text) => {
    const result = {};
    const letters = text.replace(/\s/g, '').toLowerCase(); // elimină spațiile, opțional și lowercase

    for (let letter of letters) {
        if (letter in result) {
            result[letter]++;
        } else {
            result[letter] = 1;
        }
    }

    const totalLetters = letters.length;
    for (let letter in result) {
        result[letter] = result[letter] / totalLetters;
    }

    return result;
};

console.log(letterFrequency(sampleString));
