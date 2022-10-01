/*
 * Author: Deean
 * Date: 2022-10-01 21:32
 * FilePath: common
 * Description: 
 */

// Definition for singly-linked list.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

ListNode.create = function (data) {
    let values = data.slice(1, -1).toString().split(',').map(Number);
    let head = new ListNode(-1);
    let cur = head;
    values.forEach((num) => {
        cur.next = new ListNode(num);
        cur = cur.next;
    });
    return head.next;
};

ListNode.prototype.toString = function () {
    if (this === null) return '[]';
    let values = [], head = this;
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    return values;
}

module.exports = ListNode;


 