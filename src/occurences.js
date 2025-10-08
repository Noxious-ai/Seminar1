function occurences(text, char){
    let count = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] === char){
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e")); // 2
// console.log(occurences("ananas", "a")); // 3
// console.log(occurences("ananas", "n")); // 2