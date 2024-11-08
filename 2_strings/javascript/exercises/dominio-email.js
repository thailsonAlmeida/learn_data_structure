function extractEmailInformation(email) {
    userAndDomain =  email.split("@");
    isBrazilian = email.endsWith(".br")
    verifyIsBrazilian = isBrazilian == true ? "Sim" : "Não";

    console.log("Usuário: " + userAndDomain[0]);
    console.log("Dominio: " + userAndDomain[1]);
    console.log("Brasileiro: " + verifyIsBrazilian);
    console.log("");
}


console.log("")
console.log("EXERCICIO 02")
extractEmailInformation("joao.silva23@yahoo.com.br")
extractEmailInformation("maria123@gmail.com")