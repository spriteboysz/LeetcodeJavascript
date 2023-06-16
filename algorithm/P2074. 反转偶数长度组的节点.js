/*
 * Author: Deean
 * Date: 2023-06-15 23:40
 * FilePath: algorithm
 * Description:2074. 反转偶数长度组的节点
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function (head) {
    if (head === null) return head;
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    
    for (let i = 0, size = 0, n = nodes.length; i < n; i += size) {
        size = Math.min(++size, n - i);
        if (size % 2 === 1) continue;
        for (let j = 0; j < size / 2; j++) {
            let node = nodes[i + j];
            nodes[i + j] = nodes[i + size - j - 1];
            nodes[i + size - j - 1] = node;
        }
    }
    
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(reverseEvenLengthGroups(ListNode.create("[5,2,6,3,9,1,7,3,8,4]")).toString());