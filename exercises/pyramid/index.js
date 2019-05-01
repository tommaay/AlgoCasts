// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n) {
    // number of rows = n
    // number of columns = n + 2
    // number of spaces between = n - row
    // add number of spaces, then # up to row length - number of spaces, then fill the rest with spaces
    // rows go from 1 up to and including n

    const rowLength = n * 2 - 1;

    for (let row = 1; row <= n; row++) {
        let temp = '';
        const numSpaces = n - row;

        for (let col = 0; col < rowLength; col++) {
            if (col < numSpaces || col >= rowLength - numSpaces) {
                temp += ' ';
            } else {
                temp += '#';
            }
        }

        console.log(temp);
    }
}

module.exports = pyramid;
