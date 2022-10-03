/*
 * Author: Deean
 * Date: 2022-10-03 23:14
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) return head;
        set.add(head);
        head = head.next;
    }
    return null;
};

console.log();
 