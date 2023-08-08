/* 
6. Given an array arr1. Write a function that returns a new array of elements that appear more than once in arr1. The elements in new array can only appear once in this array.
Example: 	
const arr1 = [1,2,3,4,2,3,5,3,1,1,5,2,3];
const myFunc = (inputArr) => {
    // write your code here
}
const arr2 = myFunc(arr1); // [2,3,1,5]
*/

const myFunc = (inputArr) => {
    const uniqueElements = new Set();
    const result = [];

    inputArr.forEach(value => {
        if (!uniqueElements.has(value)) {
            uniqueElements.add(value);
        }
        else if(result.indexOf(value) === -1) {
            result.push(value);
        }
    })

    return result;
}

console.log(myFunc([1,2,3,4,2,3,5,3,1,1,5,2,3]))