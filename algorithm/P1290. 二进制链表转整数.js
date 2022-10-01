/*
 * Author: Deean
 * Date: 2022-10-01 22:44
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let num = 0;
    while (head) {
        num = num * 2 + head.val;
        head = head.next;
    }
    return num;
};

console.log(getDecimalValue(ListNode.create("[1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]")));

 