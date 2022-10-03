/*
 * Author: Deean
 * Date: 2022-10-03 10:02
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

console.log(middleNode(ListNode.create("[1,2,3,4,5]")).toString());
console.log(middleNode(ListNode.create("[1,2,3,4,5,6]")).toString());
