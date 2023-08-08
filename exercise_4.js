/* 
4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)
Example: [1,2,3,1,2,3,4,5,6,4] => [1,2,3,4,5,6]
*/

function findUniqueElements(arr) {
    const uniqueElements = [];

    arr.forEach((value) => {
        if (uniqueElements.indexOf(value) === -1) {
            uniqueElements.push(value);
        }
    })

    return uniqueElements;
}

function findUniqueElementsUsingSet(arr) {
    const uniqueElementSet = new Set(arr);
    return Array.from(uniqueElementSet);
}