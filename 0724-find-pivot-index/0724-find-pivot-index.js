/**
 * @param {number[]} nums
 * @return {number}
 */
 const pivotIndex = function(nums) {
     let left = 0;
     for(let i=0; i<nums.length; i++) {
        let right = addNums(nums) - nums[i] - left;
         
        if(left == right)
            return i;
        left += nums[i];
    }           
    return -1
};

const addNums = (arr) => {
    if(arr.length !== 0)
     return arr.reduce((acc,value) => acc + value);
} 
