// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // have a loop of n times that will console log the result
    // have a nested loop that will create the result to log

    for (let i = 0; i < n; i++) {
        let result = '';

        for (let j = 0; j < n; j++) {
            if (j <= i) {
                result += '#';
            } else {
                result += ' ';
            }
        }

        console.log(result);
    }
}

module.exports = steps;
