/*
 * Author: Deean
 * Date: 2022-10-03 23:10
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) return true;
        set.add(head);
        head = head.next;
    }
    return false;
};

console.log(hasCycle(ListNode.create("[1,2,3,4]")));
 