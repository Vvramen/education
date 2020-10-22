function fullSum(...args) {
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') throw new Error("Wrong Argument Type");
    };

    let arr = [];
    for (let i = 0; i < args.length; i++) {
        arr[i] = args[i];
    }

    let result = arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    return result;
}

window.fullSum = fullSum;
export default fullSum;
