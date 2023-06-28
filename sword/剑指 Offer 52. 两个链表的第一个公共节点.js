/*
 * Author: Deean
 * Date: 2022-10-03 19:33
 * FilePath: sword
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const set = new Set();
    let cur = headA;
    while (cur) {
        set.add(cur);
        cur = cur.next;
    }
    cur = headB;
    while (cur) {
        if (set.has(cur)) return cur;
        cur = cur.next;
    }
};

headA = ListNode.create("[1,2,3]")
headB = ListNode.create("[1,2,4]")
console.log(getIntersectionNode(headA, headB));
 