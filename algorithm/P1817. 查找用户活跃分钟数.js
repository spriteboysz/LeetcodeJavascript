/*
 * Author: Deean
 * Date: 2023-08-13 10:21
 * FilePath: algorithm
 * Description:1817. 查找用户活跃分钟数
 */

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let map = new Map();
    for (const log of logs) {
        let [id, min] = log;
        if (!map.has(id)) {
            map.set(id, new Set());
        }
        map.set(id, map.get(id).add(min));
    }
    let active = new Array(k).fill(0);
    map.forEach((v, _) => {
        active[v.size - 1] += 1;
    });
    return active;
};

console.log(findingUsersActiveMinutes(logs = [[0, 5], [1, 2], [0, 2], [0, 5], [1, 3]], k = 5));