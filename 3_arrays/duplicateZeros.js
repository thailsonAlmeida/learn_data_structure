const duplicateZeros = (arr) => {
    
    for (let i = 0; i < arr.length -1; i++) {
        
        if (arr[i] == 0){
            
            for (let j = arr.length - 2; j > i; j--) {
                arr[j + 1] = arr[j];
            }

            arr[i + 1] = arr[i];
            i = i + 1;

        }

    }

};


const arr = [1,0,2,3,0,4,5,0]
duplicateZeros(arr)
console.log(arr);