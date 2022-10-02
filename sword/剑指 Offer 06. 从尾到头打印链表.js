/*
 * Author: Deean
 * Date: 2022-10-02 21:59
 * FilePath: sword
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    return values.reverse();
};

console.log(reversePrint(ListNode.create("[1,2,3]")));
 