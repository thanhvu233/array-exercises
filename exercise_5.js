/* 
5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
Example: 	
const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];
=> [3,5,9]
*/

function findDuplicateElements(arr1, arr2) {
    const uniqueElements = new Set(arr1);

    const result = arr2.filter((value) => {
        if (uniqueElements.has(value)) {
            return value;
        }
    })

    return result;
}

console.log(findDuplicateElements([1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7], [3, 5, 9, 10, 88]))