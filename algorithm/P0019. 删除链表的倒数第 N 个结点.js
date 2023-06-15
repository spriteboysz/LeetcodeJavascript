/*
 * Author: Deean
 * Date: 2023-06-14 23:49
 * FilePath: algorithm
 * Description:19. 删除链表的倒数第 N 个结点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let slow = dummy, fast = dummy;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast && fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
};

console.log(removeNthFromEnd(ListNode.create("[1,2,3,4,5]"), 2).toString());