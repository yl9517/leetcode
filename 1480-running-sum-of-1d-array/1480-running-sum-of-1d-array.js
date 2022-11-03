/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    return nums.reduce((acc, value) => {
        sum = sum+value
        acc.push(sum)
        return acc
    }, [])
};