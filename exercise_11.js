/* 
11. Get a new array, which includes unique elements. Those elements are elements from arrays in each value of object deps below
const deps = {
            'data01':[1,2,3,[12,323]],
            'data02':[5,8,12],
            'data03':[5,14,79],
            'data04':[3,64,105],
        }
=> [1, 2, 3, 12, 323, 5, 8, 14, 79, 64, 105]
*/

const deepFlattenArray = (input) => {
    let result = [];

    if (!Array.isArray(input)) {
        return input;
    }

    input.forEach(value => {
        result = result.concat(deepFlattenArray(value));
    })

    return result;
}

function getUniqueElements(input) {
    const flattenArr = deepFlattenArray(Object.values(input));

    const uniqueElementSet = new Set(flattenArr);
    return Array.from(uniqueElementSet);
}

const deps = {
    'data01':[1,2,3,[12,323]],
    'data02':[5,8,12],
    'data03':[5,14,79],
    'data04':[3,64,105],
}

console.log(getUniqueElements(deps));