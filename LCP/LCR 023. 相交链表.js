/*
 * Author: Deean
 * Date: 2023-10-07 22:32
 * FilePath: LCP
 * Description: LCR 023. 相交链表
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