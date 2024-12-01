const findMaxConsectiveOnes = (nums) => {
    let maxOnes = 0;
    let countOnes = 0;

    for(let value of  nums){
        if(value == 1)
            countOnes++;

        if(value != 1 && countOnes > 0){
            if(countOnes > maxOnes)
                maxOnes = countOnes;
            countOnes = 0;
        }
    }

    if(countOnes > maxOnes) 
        maxOnes = countOnes;

    return maxOnes;
}

console.log("Consectives Ones: "  + findMaxConsectiveOnes([0,0,1,1,1,0,1]));