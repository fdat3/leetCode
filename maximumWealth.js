/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach((account) => {
        let sum = account.reduce((x, y) => {
            return x + y;
        }, 0)
        if (max < sum) max = sum
    })
    return max;
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));