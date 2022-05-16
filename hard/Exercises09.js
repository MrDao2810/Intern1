function searchWord(text, word) {    
    let x = 0; 
    let y = 0;   
    for (let i = 0; i < text.length; i++) {
        if(text[i] === word[0]) {
            y = 0;
            for(let j = i; j < i + word.length; j++) {
                if(text[j] === word[j - i]) {
                    y++;
                }
                if (y === word.length) {
                    x++;
                }
            }
        }
    }
    return "'" + word + "' xuat hien " + x + " lan.";
}
console.log(searchWord('that su hom nay em rat muon nghi nhung em khong co tien nen em lai di lam kiem tien', 'em'));