/*
 * Author: Deean
 * Date: 2023-08-12 09:56
 * FilePath: algorithm
 * Description:817. 链表组件
 */

let ListNode = require('../common/ListNode.js');
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
    let set = new Set();
    for (const num of nums) {
        set.add(num);
    }
    let flag = false, cnt = 0;
    while (head) {
        if (set.has(head.val)) {
            if (!flag) {
                flag = true;
                cnt++;
            }
        } else {
            flag = false;
        }
        head = head.next;
    }
    return cnt;
};

let head = ListNode.create("[0,1,2,3,4]");
console.log(numComponents(head, [0, 3, 1, 4]));