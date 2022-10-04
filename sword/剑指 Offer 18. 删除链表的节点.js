/*
 * Author: Deean
 * Date: 2022-10-04 21:46
 * FilePath: sword
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head.val === val) return head.next;
    let cur = head;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            return head;
        }
        cur = cur.next;
    }
};

console.log(deleteNode(ListNode.create("[4,5,1,9]"), 1).toString());
 