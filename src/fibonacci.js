function calculateFibonacci(index){
    if (index == 0)
        return 0;
    else if (index == 1)
        return 1;
    else {
        let previous = 0;
        let current = 1;
        for (let i = 2; i <= index; i++) {
            let temp = current;
            current += previous;
            previous = temp;
        }
        return current;
    }
}

if (process.argv.length < 3) {
    console.log('not enough params!');
} else {
    console.log(calculateFibonacci(parseInt(process.argv[2])));
}
