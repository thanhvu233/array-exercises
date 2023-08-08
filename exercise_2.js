/* 
2. Find 2 elements with the greatest sum in an array
Example: [1,7,9,2,5,3,8] => [9,8]
*/

function findElementsWithGreatestSum(arr) {
    arr.sort((a, b) => b - a);

    return [arr[0], arr[1]];
}