console.log("")
console.log("Exercicio 07")


 function longestCommonPrefix(v){
    v.sort();
    let first = v[0];
    let final = v[v.length - 1];
    result = [];

    for(let i = 0; i < Math.min(first.length, final.length); i++){
        if(first[i] !== final[i]){
            return result.join('');
        }
        result.push(first[i]);
    }

    return result.join('');
 }

 console.log(`"${longestCommonPrefix(["flowers","flow","flight"])}"`);
 console.log(`"${longestCommonPrefix(["dog","rececar","car"])}"`);