/*
 * Author: Deean
 * Date: 2022-09-25 22:32
 * FilePath: common
 * Description: 
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let arr = []
    if (root === null) return '[]'
    let queue = [root]
    while (queue.length > 0) {
        if (queue[0] === null) {
            arr.push(null)
        } else {
            arr.push(queue[0].val)
            queue.push(queue[0].left)
            queue.push(queue[0].right)
        }
        queue.shift()
    }
    while (arr[arr.length - 1] === null) {
        arr.pop()
    }
    return '[' + arr.join(',') + ']'
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 2) return null
    let arr = data.slice(1, -1).split(',').map(item => item === '' ? null : parseInt(item))
    let root = new TreeNode(arr[0])
    arr.shift()
    let queue = [root]
    while (arr.length > 0) {
        if (arr[0] !== null) {
            let left = new TreeNode(arr[0])
            queue[0].left = left
            queue.push(left)
        } else {
            queue[0].left = null
        }
        arr.shift()
        if (arr.length > 0) {
            if (arr[0] !== null) {
                let right = new TreeNode(arr[0])
                queue[0].right = right
                queue.push(right)
            } else {
                queue[0].right = null
            }
            arr.shift()
        }
        queue.shift()
    }
    return root
};


console.log();
 