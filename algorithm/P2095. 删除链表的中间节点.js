/*
 * Author: Deean
 * Date: 2023-06-14 22:58
 * FilePath: algorithm
 * Description:2095. 删除链表的中间节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
    if (head === null || head.next === null) return null;
    let slow = head, fast = head, prev = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = prev.next.next;
    return head;
};

console.log(deleteMiddle(ListNode.create("[1,3,4,7,1,2,6]")).toString());