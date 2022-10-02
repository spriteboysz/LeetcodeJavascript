/*
 * Author: Deean
 * Date: 2022-10-02 20:50
 * FilePath: interview
 * Description: 
 */

let ListNode = require('../common/ListNode.js');
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
    let slow = head, fast = head;
    while (k) {
        fast = fast.next;
        k--;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow.val;
};

console.log(kthToLast(ListNode.create("[1,2,3,4,5]"), 2));
 