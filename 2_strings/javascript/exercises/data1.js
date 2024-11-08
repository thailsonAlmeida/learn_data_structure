function extractDateData(date){  
    vectorData = date.split("/")  
    var dia = Number.parseInt(vectorData[0]);
    var mes = Number.parseInt(vectorData[1]);
    var ano = Number.parseInt(vectorData[2]);

    console.log("Dia: " + dia)
    console.log("Mês: " + mes)
    console.log("Ano: " + ano)

}

console.log("")
console.log("EXERCICIO 03")
extractDateData("21/07/2010")