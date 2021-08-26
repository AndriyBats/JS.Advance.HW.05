class myString{
    reverse(str){
        let revStr = '';
        for(let i = str.length - 1; i >= 0; i--){
            revStr += str[i];
        }
        return revStr;
    }
    ucFirst(str){
        let newStr = str.charAt(0).toUpperCase();
        for(let i=1; i <= (str.length - 1); i++){
            newStr += str.charAt(i);
        }
        return newStr;
    }
    ucWords(str){
        let newUpperStr = str.charAt(0).toUpperCase();
        for(let i=1; i <= (str.length - 1); i++){
            if(str.charAt(i - 1) == ' '){
                newUpperStr += str.charAt(i).toUpperCase();
            }else{
                newUpperStr += str.charAt(i);
            }
        }
        return newUpperStr;
    }
}

const str = new myString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));
