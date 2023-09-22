/*
 * Author: Deean
 * Date: 2023-09-21 22:57
 * FilePath: algorithm
 * Description:2807. 在链表中插入最大公约数
 */

let ListNode = require('../common/ListNode.js');
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
    /**
     * @param {Number} a
     * @param {Number} b
     * @returns {Number}
     */
    var gcd = function (a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }
    var nodes = [];
    while (head) {
        nodes.push(head);
        nodes.push(new ListNode(-1));
        head = head.next;
    }
    nodes.pop();
    for (let i = 2, n = nodes.length; i < n; i += 2) {
        nodes[i - 1].val = gcd(nodes[i - 2].val, nodes[i].val);
    }
    for (let i = 0, n = nodes.length; i < n - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
};

console.log(insertGreatestCommonDivisors(new ListNode.create("[18,6,10,3]")).toString());