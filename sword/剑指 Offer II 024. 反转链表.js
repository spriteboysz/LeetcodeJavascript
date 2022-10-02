/*
 * Author: Deean
 * Date: 2022-10-02 21:37
 * FilePath: sword
 * Description: 
 */

let ListNode = require('../common/ListNode.js');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

console.log(reverseList(ListNode.create("[1,2,3,4,5]")));
 