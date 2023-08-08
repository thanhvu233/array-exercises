/* 
10. 	Write 3 methods myMap, myFilter, myReduce (suggestion: use Array.prototype, "this" keyword, and for loop).
    3 these methods have similar in use and usage as map, filter, reduce of array in JS
*/

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
};

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
    let result = initialValue;

    if (initialValue === undefined) {
        result = this[0];
    }

    for (let i = 0; i < this.length; i++) {
        if(initialValue !== undefined) {
            result = callback(result, this[i]);
        }
        else if (i < this.length - 1) {
            result = callback(result, this[i+1]);
        }
      }
      return result;
};