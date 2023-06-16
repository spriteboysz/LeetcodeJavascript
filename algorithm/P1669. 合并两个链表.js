/*
 * Author: Deean
 * Date: 2023-06-15 23:23
 * FilePath: algorithm
 * Description:1669. 合并两个链表
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let prev1 = list1;
    for (let i = 0; i < a - 1; i++) {
        prev1 = prev1.next;
    }
    let prev2 = prev1;
    for (let i = 0; i < b - a + 2; i++) {
        prev2 = prev2.next;
    }
    prev1.next = list2;
    while (list2.next) {
        list2 = list2.next;
    }
    list2.next = prev2;
    return list1;
};

let list1 = ListNode.create("[0,1,2,3,4,5]");
let list2 = ListNode.create("[1000000,1000001,1000002]");
console.log(mergeInBetween(list1, 3, 4, list2).toString());