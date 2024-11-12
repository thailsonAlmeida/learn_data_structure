console.log("")
console.log("Exercicio 08")

function invalidTransactions(transactions){
    function Transaction(csv){
        const parts = csv.split(",");
        this.name = parts[0];
        this.time = Number(parts[1]);
        this.amount = Number(parts[2]);
        this.city = parts[3];
    }

    const result = [];
    const invalidArray = new Array(transactions.lenght).fill(false);

    for(let i = 0; i < transactions.length; i++) {
        const iTransactions = new Transaction(transactions[i]);
        
        if(iTransactions.amount > 1000){
            invalidArray[i] = true;
        }

        for(let ii = i + 1; ii < transactions.length; ii++){
            const iiTransaction = new Transaction(transactions[ii]);

            if(
                iTransactions.name === iiTransaction.name && 
                Math.abs(iTransactions.time - iiTransaction.time) <= 60 && 
                iTransactions.city !== iiTransaction.city){
                    invalidArray[i] = true;
                    invalidArray[ii] = true;                    
                }
        }
    }

    for(let i = 0; i < transactions.length; i++){
        if(invalidArray[i]){
            result.push(transactions[i]);
        }
    }
    return result;
}

console.log(invalidTransactions(["alice,20,800,mtv","alice,50,1200,beijing","bob,60,300,mtv","ana,70,1100,mtv"]));
console.log(invalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"]));
console.log(invalidTransactions(["alice,20,800,mtv","alice,50,1200,mtv"]));
console.log(invalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"]));

