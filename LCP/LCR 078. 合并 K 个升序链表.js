/*
 * Author: Deean
 * Date: 2023-10-08 22:52
 * FilePath: LCP
 * Description: LCR 078. 合并 K 个升序链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists === null || lists.length === 0) return null;
    let nodes = [];
    for (const list of lists) {
        let cur = list;
        while (cur) {
            nodes.push(cur);
            cur = cur.next;
        }
    }
    if (nodes.length === 0) return null;
    nodes.sort((a, b) => a.val - b.val);
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

let l1 = ListNode.create("[1,4,5]");
let l2 = ListNode.create("[1,3,4]");
let l3 = ListNode.create("[2,6]");
console.log(mergeKLists([l1, l2, l3]).toString());