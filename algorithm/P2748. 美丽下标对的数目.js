/*
 * Author: Deean
 * Date: 2023-06-29 22:52
 * FilePath: algorithm
 * Description:2748. 美丽下标对的数目
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function (nums) {
    var gcd = function (a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    let arr = []
    for (const num of nums) {
        let ss = num.toString();
        arr.push([Number(ss[0]), Number(ss[ss.length - 1])]);
    }
    
    let cnt = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (gcd(arr[i][0], arr[j][1]) === 1) {
                cnt++;
            }
        }
    }
    return cnt;
};

console.log(countBeautifulPairs(nums = [11, 21, 12]));