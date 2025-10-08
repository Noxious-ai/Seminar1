function concatArrays(array1, array2){
    let newArray = [];
    for(var i = 0; i < array1.length; i++)
    {
        newArray.push(array1[i]);
        newArray.push(array2[i]);
    }
    return newArray;

}

console.log(concatArrays([1, 2], [3, 4]).join(', '));