var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        let countPos = nums[i];
        let countNextPos = nums[i + 1];
        let posValue = nums[countPos];
        let nextPosValue = nums[countNextPos];
        if (posValue[count] + nextPosValue[countNextPos] === target) return [countPos, countNextPos]
    }
};
