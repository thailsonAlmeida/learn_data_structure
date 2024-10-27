//Exemplo 1: queremos verificar se um CEP é valido, ou seja, se ele possui 8 dígitos, podendo ou não ter um hífen entre o quinto e sexto dígito.
function validateCEP(cep) {
    const regex = /^\d{5}-?\d{3}$/;
    return regex.test(cep);
  }
  
  console.log(validateCEP("12345-678")); // true
  console.log(validateCEP("12345678")); // true
  console.log(validateCEP("1234-5678")); // false
  