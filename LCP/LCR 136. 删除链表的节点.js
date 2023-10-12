/*
 * Author: Deean
 * Date: 2023-10-08 23:29
 * FilePath: LCP
 * Description: LCR 136. 删除链表的节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let cur = dummy;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};

console.log(deleteNode(ListNode.create("[4,5,1,9]"), 5).toString());
console.log(deleteNode(ListNode.create("[4,5,1,9]"), 4).toString());
console.log(deleteNode(ListNode.create("[4,5,1,9]"), 9).toString());