/*
 * Author: Deean
 * Date: 2023-06-15 22:57
 * FilePath: interview
 * Description:面试题 02.06. 回文链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head === null) return true;
    let values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    for (let i = 0, n = values.length; i < n / 2; i++) {
        if (values[i] !== values[n - 1 - i]) return false;
    }
    return true;
};

console.log(isPalindrome(ListNode.create("[1,2,2,1]")));
console.log(isPalindrome(ListNode.create("[1,2,3,2,1]")));