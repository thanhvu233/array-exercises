/* 
1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays;
Example: 	
array1 = [1,2,3,4,5,6];
array2 = [3,4,8,9,12];
=> [3,4]
*/

function getCommonElements(arr1, arr2) {
    const commonElements = new Set([...arr1]);

    return arr2.filter((value) => {
        if (commonElements.has(value)) return value;
    });
}