/*
 * Author: Deean
 * Date: 2023-06-14 21:56
 * FilePath: algorithm
 * Description:1019. 链表中的下一个更大节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    if (head === null) return null;
    let stack = [], larger = [];
    let index = -1;
    while (head) {
        index += 1;
        larger.push(0);
        while (stack.length && stack[stack.length - 1][0] < head.val) {
            larger[stack.pop()[1]] = head.val;
        }
        stack.push([head.val, index]);
        head = head.next;
    }
    return larger;
};

console.log(nextLargerNodes(ListNode.create("[2,7,4,3,5]")));