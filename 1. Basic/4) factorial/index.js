function factorial(n) {
    let result;
    result = n;
    for (let i = n - 1; i > 1; --i) {
        result *= i;
    }
    return result;
}

window.factorial = factorial;

export default factorial;
