/*
 * Author: Deean
 * Date: 2023-10-07 22:42
 * FilePath: LCP
 * Description: LCR 025. 两数相加 II
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    let nums1 = [], nums2 = [], nums = [], carry = 0;
    while (l1) {
        nums1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        nums2.push(l2.val);
        l2 = l2.next;
    }
    while (nums1.length > 0 || nums2.length > 0 || carry > 0) {
        if (nums1.length > 0) {
            carry += nums1.pop();
        }
        if (nums2.length > 0) {
            carry += nums2.pop();
        }
        nums.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
    let dummy = new ListNode(-1);
    let cur = dummy;
    for (let i = nums.length - 1; i >= 0; i--) {
        cur.next = new ListNode(nums[i]);
        cur = cur.next
    }
    return dummy.next;
};

console.log(addTwoNumbers(ListNode.create("[7,2,4,3]"), ListNode.create("[5,6,4]")).toString());