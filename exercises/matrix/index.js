// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//     [
//         [ [0, 0], [0, 1], [0, 2], [0, 3] ],
//         [ [1, 0], [1, 1], [1, 2], [1, 3] ],
//         [ [2, 0], [2, 1], [2, 2], [2, 3] ],
//         [ [3, 0], [3, 1], [3, 2], [3, 3] ]
//     ]

function matrix(n) {
    const results = [];

    let startRow = 0;
    let endRow = n - 1;

    let startCol = 0;
    let endCol = n - 1;

    let counter = 1;
    let numSlots = n * n;

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    while (counter <= numSlots) {
        // left to right
        for (let i = startCol; i <= endCol; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // top to bottom
        for (let i = startRow; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        // right to left
        for (let i = endCol; i >= startCol; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // bottom to top
        for (let i = endRow; i >= startRow; i--) {
            results[i][startCol] = counter;
            counter++;
        }
        startCol++;
    }

    return results;
}

module.exports = matrix;
