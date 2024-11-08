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


console.log(validatePassword("amerca1@"))
console.log(validatePassword("123654asfdgfDSFJF"))
