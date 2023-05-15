var runningSum = function (nums) {
    let sum = 0;
    return nums.map((num) => sum += num)
};

console.log(runningSum([3, 1, 2, 10, 1]));