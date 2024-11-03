//FUNCTIONS
function removeNonDigits(string) {
    const regexStringRemoveCaracter = /\D/g;    
    console.log(string.replace(regexStringRemoveCaracter, ""))
}


function extractEmailInformation(email) {
    userAndDomain =  email.split("@");
    isBrazilian = email.endsWith(".br")
    verifyIsBrazilian = isBrazilian == true ? "Sim" : "Não";

    console.log("Usuário: " + userAndDomain[0]);
    console.log("Dominio: " + userAndDomain[1]);
    console.log("Brasileiro: " + verifyIsBrazilian);
    console.log("");
}


function extractDateData(date){  
    vectorData = date.split("/")  
    var dia = Number.parseInt(vectorData[0]);
    var mes = Number.parseInt(vectorData[1]);
    var ano = Number.parseInt(vectorData[2]);

    console.log("Dia: " + dia)
    console.log("Mês: " + mes)
    console.log("Ano: " + ano)

}

function formatDate(date){
    var dia = date.day.toString();
    
    if(date.month < 10){
        var mes = "0" + date.month.toString();
    }else{
        var mes = date.month.toString();
    }
    
    var ano = date.year.toString();
    

    console.log(dia + "/" + mes + "/" + ano);
}

//INPUTS

console.log("")
console.log("EXERCICIO 01")
removeNonDigits("87409217293")
removeNonDigits("874092172-93")
removeNonDigits("874.092.172-93")


console.log("")
console.log("EXERCICIO 02")
extractEmailInformation("joao.silva23@yahoo.com.br")
extractEmailInformation("maria123@gmail.com")

console.log("")
console.log("EXERCICIO 03")
extractDateData("21/07/2010")

console.log("")
console.log("EXERCICIO 04")
formatDate({"day": 21, "month" : 9, "year" : 2010})