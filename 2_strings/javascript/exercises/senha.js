console.log("")
console.log("Exercicio 05")

function validatePassword(str){    
    if(str.length < 8)
        return false

    if(!hasLatter(str))
        return false
    
    if(!hasNumber(str))
        return false

    if(!hasSpecialCharacter(str))
        return false

    return true
}

function hasLatter(str){
    for(let i = 0; i < str.length; i++){
        if((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'z'))
            return true;
    }
    return false;    
}

function hasNumber(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] >= '0' && str[i] <= '9')
            return true;
    }
    return false;    
}

function hasSpecialCharacter(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] === "@" || str[i] === '#' || str[i] === '&')
            return true;
    }
    return false;    
}


//com regex
function validatePasswordRegex(str){    
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@&#]).{8,}$/;
    return regex.test(str);
}

function validatePasswordRegexPlus(str){    
    const regexTam = /.{8,}/;
    const regexChar = /[a-zA-Z]/;
    const regexUpSm = /\d/;
    const regexCarac = /[@#&]/;
    return regexTam.test(str) && regexChar.test(str) && regexUpSm.test(str) && regexCarac.test(str);
}

console.log(validatePassword("amerca1@"))
console.log(validatePassword("123654asfdgfDSFJF"))

console.log(validatePasswordRegex("amerca1@"))
console.log(validatePasswordRegex("123654asfdgfDSFJF#"))


console.log(validatePasswordRegexPlus("amerca1@"))
console.log(validatePasswordRegexPlus("123654asfdgfDSFJF"))
