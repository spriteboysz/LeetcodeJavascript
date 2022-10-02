/*
 * Author: Deean
 * Date: 2022-10-02 19:11
 * FilePath: sword
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let slow = head, fast = head;
    while (k) {
        fast = fast.next;
        k--;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};

console.log(getKthFromEnd(ListNode.create("[1,2,3,4,5]"), 2).toString());
 