// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let newArr = [];
//     let temp = [];
//     const lastIdx = array.length - 1;

//     array.map((ele, idx) => {
//         if (size === 1) {
//             newArr.push([ele]);
//         } else if (temp.length < size && idx !== lastIdx) {
//             temp.push(ele);
//         } else if (temp.length === size && idx !== lastIdx) {
//             newArr.push(temp);
//             temp = [ele];
//         } else if (temp.length < size && idx === lastIdx) {
//             temp.push(ele);
//             newArr.push(temp);
//         } else if (temp.length === size && idx === lastIdx) {
//             newArr.push(temp);
//             newArr.push([ele]);
//         }
//     });

//     console.log(newArr);
//     return newArr;
// }

function chunk(array, size) {
    let chunked = [];
    let i = 0;

    while (i < array.length) {
        chunked.push(array.slice(i, i + size));
        i += size;
    }

    console.log(chunked);
    return chunked;
}

module.exports = chunk;
