function fibonacci(num) {
// your code here
	nction fibonacci(num) {
    let a = 0;
    let b = 1;

    if (num == 0) {
        return "Invalid Input! Fibonacci sequence starts from 1st term.";
    }
    if (num == 1) {
        return a;
    }
    if (num == 2) {
        return b;
    }
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}
module.exports = fibonacci;
