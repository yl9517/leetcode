/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // 풀이1)
    
    // let sum = 0
    // return nums.reduce((acc, value) => {
    //     sum = sum+value
    //     acc.push(sum)
    //     return acc
    // }, [])
    
    // 풀이2)
    nums.reduce((acc,value,i,arr) => {
        return arr[i]+=acc
    },0)
    return nums
};