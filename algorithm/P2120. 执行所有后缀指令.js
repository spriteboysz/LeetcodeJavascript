/*
 * Author: Deean
 * Date: 2023-08-11 21:54
 * FilePath: algorithm
 * Description:2120. 执行所有后缀指令
 */

/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
    let nums = new Array(s.length).fill(0);
    for (let i = 0, m = s.length; i < m; i++) {
        let [x, y] = [...startPos];
        for (let j = i; j < m; j++) {
            switch (s[j]) {
                case 'L':
                    y -= 1;
                    break;
                case 'R':
                    y += 1;
                    break;
                case 'U':
                    x -= 1;
                    break;
                case 'D':
                    x += 1;
                    break;
            }
            if (x < 0 || y < 0 || x >= n || y >= n) {
                break;
            }
            nums[i]++;
        }
    }
    return nums;
};

console.log(executeInstructions(n = 3, startPos = [0, 1], s = "RRDDLU"));