/* 
3. Find pairs of elements whose sum is equal to a given number
Example: [1,7,9,2,5,3,8], sum = 10 => [1,9] ; [7,3]; [2,8]
*/

function findPairs(arr, sum) {
    const elementIndexMap = new Map();
    let isFoundPair = false;

    arr.forEach((value, index) => {
        const targetElement = sum - value;

        if (elementIndexMap.has(targetElement)) {
            console.log(`[${arr[elementIndexMap.get(targetElement)]},${value}]`);

            if (!isFoundPair) {
                isFoundPair = true;
            }
        }

        elementIndexMap.set(value, index);
    })

    if (!isFoundPair) {
        console.log('Pair not found');
    }
}

findPairs([1,7,9,2,5,3,8], 10);
