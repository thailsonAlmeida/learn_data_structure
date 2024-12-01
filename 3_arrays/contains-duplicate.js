const containsDuplicate = (nums) => {  
    let isDuplicate = false;
    for (let i = 0; i < nums.length -1; i++) {
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] === nums[j])
                return !isDuplicate;
        }
    }

    return isDuplicate;
};


const nums = [1,2,3,0]
console.log(containsDuplicate(nums));