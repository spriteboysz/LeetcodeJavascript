/*
 * Author: Deean
 * Date: 2023-06-15 23:35
 * FilePath: algorithm
 * Description:138. 复制带随机指针的链表
 */

require('../common/ListNode.js');
/**
 * @param {Node} head
 * @return {Node}
 * @typedef {Node} ListNode
 */
var copyRandomList = function (head) {
    if (head === null) return head;
    let map = new Map();
    let prev = head;
    while (prev) {
        map.set(prev, new Node(prev.val));
        prev = prev.next;
    }
    map.set(null, null);
    prev = head;
    while (prev) {
        map.get(prev).next = map.get(prev.next);
        map.get(prev).random = map.get(prev.random);
        prev = prev.next;
    }
    return map.get(head);
};

let head = Node.create("[[7,null],[13,0],[11,4],[10,2],[1,0]]");
console.log(copyRandomList(head));