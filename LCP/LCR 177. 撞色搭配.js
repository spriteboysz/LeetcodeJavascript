/*
 * Author: Deean
 * Date: 2023-10-09 23:44
 * FilePath: LCP
 * Description: LCR 177. 撞色搭配
 */

/**
 * @param {number[]} sockets
 * @return {number[]}
 */
var sockCollocation = function (sockets) {
    let map = new Map();
    for (let socket of sockets) {
        map.set(socket, (map.get(socket) || 0) + 1);
    }
    let single = [];
    for (let socket of sockets) {
        if (map.get(socket) === 1) {
            single.push(socket);
        }
    }
    return single;
};

console.log(sockCollocation(sockets = [4, 5, 2, 4, 6, 6]));