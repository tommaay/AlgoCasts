// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chMap = {};
    let max = 0;
    let maxChar = '';

    for (let ch of str) {
        chMap[ch] = chMap[ch] + 1 || 1; // if first case is undefined, set value to 1
    }

    for (let ch in chMap) {
        if (chMap[ch] > max) {
            max = chMap[ch];
            maxChar = ch;
        }
    }

    return maxChar;
}

module.exports = maxChar;
