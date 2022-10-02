/*
 * Author: Deean
 * Date: 2022-10-02 23:03
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.values = [];
    while (head) {
        this.values.push(head.val);
        head = head.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    return this.values[Math.floor(Math.random() * this.values.length)]
};

solution = new Solution(ListNode.create("[1,2,3]"));
console.log(solution.getRandom()); // 返回 1
console.log(solution.getRandom()); // 返回 3
console.log(solution.getRandom()); // 返回 2
console.log(solution.getRandom()); // 返回 2
console.log(solution.getRandom()); // 返回 3

 