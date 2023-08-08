const runningSum = (nums) => {
    const sum = nums.reduce((acc, num) => acc + num, 0)
};

console.log(runningSum([3, 1, 2, 10, 1]));