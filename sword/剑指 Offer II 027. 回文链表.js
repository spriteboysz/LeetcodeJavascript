/*
 * Author: Deean
 * Date: 2023-06-14 22:46
 * FilePath: sword
 * Description:剑指 Offer II 027. 回文链表
 */

let ListNode = require('../common/ListNode.js');
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    for (let i = 0, n = values.length; i < Math.floor(n / 2); i++) {
        if (values[i] !== values[n - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(ListNode.create("[1,2,3,3,2,1]")));