const findNumbers = (nums1) => {
   let countEvenNumber = 0;
   for(let value of nums1) {
      let numDigits = value.toString().length;
      if(numDigits % 2 === 0)
         countEvenNumber++;
   }
   return countEvenNumber;
}


console.log("Contador de numeros pares: " + findNumbers([12,345,2,6,7896]))