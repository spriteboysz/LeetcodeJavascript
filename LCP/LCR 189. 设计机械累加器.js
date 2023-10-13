/*
 * Author: Deean
 * Date: 2023-10-10 22:45
 * FilePath: LCP
 * Description: LCR 189. 设计机械累加器
 */

/**
 * @param {number} target
 * @return {number}
 */
var mechanicalAccumulator = function (target) {
    if (target === 0) return 0;
    return mechanicalAccumulator(target - 1) + target;
};

console.log(mechanicalAccumulator(5));