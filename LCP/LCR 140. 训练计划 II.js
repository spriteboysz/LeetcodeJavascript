/*
 * Author: Deean
 * Date: 2023-10-08 23:38
 * FilePath: LCP
 * Description: LCR 140. 训练计划 II
 */

let ListNode = require('../common/ListNode.js');

/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function (head, cnt) {
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    return nodes[nodes.length - cnt];
};

console.log(trainingPlan(ListNode.create("[2,4,7,8]"), 1).toString());