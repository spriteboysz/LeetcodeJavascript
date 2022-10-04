/*
 * Author: Deean
 * Date: 2022-10-04 13:05
 * FilePath: sword
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};


console.log(mergeTwoLists(ListNode.create("[1,2,4]"), ListNode.create("[1,2,3]")).toString());
 