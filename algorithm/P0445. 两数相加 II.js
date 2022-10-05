/*
 * Author: Deean
 * Date: 2022-10-05 17:25
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let process = function (head) {
        if (!head) return null;
        let values = [];
        while (head) {
            values.push(head.val);
            head = head.next;
        }
        return values;
    }

    let nums1 = process(l1), nums2 = process(l2);
    let sum = [], carry = 0;
    while (nums1.length > 0 || nums2.length > 0 || carry) {
        carry += nums1.length > 0 ? nums1.pop() : 0;
        carry += nums2.length > 0 ? nums2.pop() : 0;
        sum.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
    sum.reverse();
    let dummy = new ListNode(-1), cur = dummy;
    for (let i = 0; i < sum.length; i++) {
        cur.next = new ListNode(sum[i]);
        cur = cur.next;
    }
    return dummy.next;
};

let l1 = ListNode.create("[2,4,3]"), l2 = ListNode.create("[5,6,4]");
console.log(addTwoNumbers(l1, l2).toString());
 