/*
 * Author: Deean
 * Date: 2023-06-11 23:22
 * FilePath: interview
 * Description:面试题 04.03. 特定深度节点链表
 */

let TreeNode = require('../common/TreeNode.js');
let ListNode = require('../common/ListNode.js');
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
    let lists = [];
    if (tree === null) return lists;
    let queue = [tree];
    let dummy = new ListNode(-1);
    while (queue.length) {
        let cur = dummy;
        for (let i = 0, n = queue.length; i < n; i++) {
            let node = queue.shift();
            cur.next = new ListNode(node.val);
            cur = cur.next;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        lists.push(dummy.next);
    }
    return lists;
};

console.log(listOfDepth(new TreeNode.create("[1,2,3,4,5,null,7,8]")).toString());