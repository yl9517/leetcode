/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {

    // 1. 전체 반복문 i
    // 2. (target-nums[i])의 값을 indexOf로 찾기 (단, 같은 인덱스면 안됨)
    
    for(let i=0; i<nums.length; i++){
        let otherNum = target-nums[i]
        let otherNumIndex = nums.indexOf(otherNum)
        if(otherNumIndex != -1 && otherNumIndex != i){
            return [i, otherNumIndex]
        }
    }
};