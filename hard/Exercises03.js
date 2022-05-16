let array = [8,9,12];
let array1 = [1,2,3]; 
function connectArray(array, array1) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res[i] = array[i];
    } 
    for (let j = 0; j < array1.length; j++) {
        res[j + array.length] = array1[j];
    }
    for (let i = 0; i < res.length; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[j] < res[i]) {
                let temp = res[j];
                res[j]= res[i];
                res[i] = temp;    
            }
        }
    }
    return res;
}
console.log(connectArray(array, array1));