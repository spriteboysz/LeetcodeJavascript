/*
 * Author: Deean
 * Date: 2023-06-15 22:47
 * FilePath: algorithm
 * Description:82. 删除排序链表中的重复元素 II
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return head;
    let map = new Map();
    let cur = head;
    while (cur) {
        map.set(cur.val, (map.get(cur.val) || 0) + 1);
        cur = cur.next;
    }
    let nodes = []
    cur = head;
    while (cur) {
        if (map.get(cur.val) === 1) {
            nodes.push(cur);
        }
        cur = cur.next;
    }
    if (nodes.length === 0) return null;
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(deleteDuplicates(ListNode.create("[1,2,3,3,4,4,5]")).toString());