function resultString(str) {
    let res = '';
    let strArray = str.split(' ');
    for (let i = 0; i < strArray.length; i++) {
        for (let j = strArray[i].length - 1; j >= 0; j--) {
            res += strArray[i][j];
        }               
        res += ' ';
    }
    return res;
}  
console.log(resultString('Hom nay toi nghi han mot tuan de ngu'));