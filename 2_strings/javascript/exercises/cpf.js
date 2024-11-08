function removeNonDigits(string) {
    const regexStringRemoveCaracter = /\D/g;    
    console.log(string.replace(regexStringRemoveCaracter, ""))
}

console.log("")
console.log("EXERCICIO 01")
removeNonDigits("87409217293")
removeNonDigits("874092172-93")
removeNonDigits("874.092.172-93")