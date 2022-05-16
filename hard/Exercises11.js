 // Viết hàm trả về chữ số cuối cùng khác 0 của n giai thừa
let number = [8];
function countFactorial(number) {
    let res = 1;
    let number1 = 0;
    if (number > 1) {
        for (let i = 1; i <= number; i++) {
            res = (res * i);
        } 
        res = res + ''; // số + mảng = mảng
        for (let j = res.length - 1; j >= 0; j--) {
            // res là mảnh so sánh với mảng '0'  
            if (res[j] !== '0') {
                number1 = res[j];
                return +number1;
            }  
        }
    }   
    return -1;
}
console.log(countFactorial(number));