/*
 * Author: Deean
 * Date: 2022-10-03 19:43
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    if (head === null) return null;
    let even = [], odd = [], i = 0;
    while (head) {
        if (i % 2 === 0) {
            even.push(head);
        } else {
            odd.push(head);
        }
        i += 1;
        head = head.next;
    }
    let nodes = [...even, ...odd];
    for (let j = 1; j < nodes.length; j++) {
        nodes[j - 1].next = nodes[j];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(oddEvenList(ListNode.create("[2,1,3,5,6,4,7]")).toString());
 