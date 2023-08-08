/* 
8. 	I have an array like this: const arr1 = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
Please write a function has 2 input parameters, 1st param is an array like above array, 2nd param is the name of any property in each object of the array.
Use example: myFunc('make', arr1);
That will return a new object like this (each property is an array, this array includes objects correspond of that property):
{
    "audi": [
        {
        "make": "audi",
        "model": "r8",
        "year": "2012"
        },
        {
            "make": "audi",
            "model": "rs5",
            "year": "2013"
        }
    ], 
    "ford": [
        {
            "make": "ford",
            "model": "mustang",
            "year": "2012"
        },
        {
            "make": "ford",
            "model": "fusion",
            "year": "2015"
        }
    ],
    "kia": [
        {
            "make": "kia",
            "model": "optima",
            "year": "2012"
        }
    ]
}
*/

const myFunc = (inputArr, propertyName) => {
    const resultMap = new Map();

    inputArr.forEach(obj => {
        const propertyValue = obj[propertyName];
        if (propertyValue !== undefined) {
            if (!resultMap.has(propertyValue)) {
                resultMap.set(propertyValue, [obj]);
            }
            else if (Array.isArray(resultMap.get(propertyValue))) {

                resultMap.set(propertyValue, [...resultMap.get(propertyValue), obj])
            }
        }
    })

    return Object.fromEntries(resultMap);
}