/*
 * Author: Deean
 * Date: 2023-10-09 23:18
 * FilePath: LCP
 * Description: LCR 171. 训练计划 V
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let visited = new Set();
    while (headA) {
        visited.add(headA);
        headA = headA.next;
    }
    while (headB) {
        if (visited.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};

console.log(getIntersectionNode(ListNode.create("[4,1,8,4,5]"), ListNode.create("[4,1,8,4,5]")));