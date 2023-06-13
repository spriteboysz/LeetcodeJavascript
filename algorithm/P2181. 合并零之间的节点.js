/*
 * Author: Deean
 * Date: 2023-06-13 23:10
 * FilePath: algorithm
 * Description:2181. 合并零之间的节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    head = head.next;
    let prev = head;
    while (prev && prev.next) {
        if (prev.next.val !== 0) {
            prev.val += prev.next.val;
            prev.next = prev.next.next;
        } else {
            prev.next = prev.next.next;
            prev = prev.next;
        }
    }
    return head;
};

let head = ListNode.create("[0,3,1,0,4,5,2,0]");
console.log(mergeNodes(head).toString());