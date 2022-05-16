let number = [10];
function countFactorial(number) {
    let res = 1;
    let number1 = 0;
    if (number > 1) {
        for (let i = 1; i <= number; i++) {
            res = res * i;    
        }
        res = res + '';
        console.log(res);
        for (let j = res.length - 1; j >= 0; j--) {
            if (res[j] === '0') {
                number1++;
            }
        }
    }
    return number1;
}
console.log(countFactorial(number));