function formatDate(date){   

    if(date.day < 10){
        var dia = "0" + date.day.toString();
    }else{
        var dia = date.day.toString();
    }
    
    if(date.month < 10){
        var mes = "0" + date.month.toString();
    }else{
        var mes = date.month.toString();
    }
    
    var ano = date.year.toString();
    

    console.log(dia + "/" + mes + "/" + ano);
}

console.log("")
console.log("EXERCICIO 04")
formatDate({"day": 2, "month" : 9, "year" : 2010})