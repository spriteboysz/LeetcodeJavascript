/*
 * Author: Deean
 * Date: 2022-10-03 22:01
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (const [i, num] of nums.entries()) {
        let v = map.has(num) ? map.get(num) : [];
        v.push(i);
        map.set(num, v);
    }

    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else if (nums[left] + nums[right] < target) {
            left++;
        } else {
            if (nums[left] === nums[right]) {
                return map.get(nums[left]);
            } else {
                return [map.get(nums[left])[0], map.get(nums[right])[0]];
            }
        }
    }
};

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
