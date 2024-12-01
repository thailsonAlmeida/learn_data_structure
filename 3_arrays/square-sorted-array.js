const sortedSquares = (nums) => {
    const result = [];

    for (let value of nums) {
        result.push(Math.pow(value, 2));
    }

    result.sort((a, b) => a - b);

    return result;
}

console.log(sortedSquares([-4,-1,0,3,10]));