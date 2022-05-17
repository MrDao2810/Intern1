function searchWord(text, str) {    
    let x = 0; 
    let y = 0;   
    for (let i = 0; i < text.length; i++) {
        if(text[i] === str[0]) {
            y = 0;
            for(let j = i; j < i + str.length; j++) {
                if(text[j] === str[j - i]) {
                    y++;
                }
                if (y === str.length) {
                    x++;
                }
            }
        }
    }
    return "'" + str + "' xuat hien " + x + " lan.";
}
console.log(searchWord('aaaa sd aa a', 'aa'));