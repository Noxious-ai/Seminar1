function addToArray (array, ...args){
    for (var i = 1; i < args.length; i++) { 
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", ")); // ["a", "b", "c"]
// console.log(addToArray([1,2],3,4,5)); // [1, 2, 3, 4, 5]
// console.log(addToArray(["a","b"],"c","d")); // ["a", "b", "c", "d"]