/*
 * Author: Deean
 * Date: 2022-10-04 16:10
 * FilePath: interview
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
    const set = new Set();
    let cur = head, pre = head;
    while (cur) {
        if (set.has(cur.val)) {
            pre.next = cur.next;
            cur = pre.next;
        } else {
            set.add(cur.val);
            pre = cur;
            cur = cur.next;
        }
    }
    return head;
};

console.log(removeDuplicateNodes(ListNode.create("[1,2,3,3,2,1]")).toString());
 