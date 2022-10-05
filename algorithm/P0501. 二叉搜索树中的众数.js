/*
 * Author: Deean
 * Date: 2022-10-05 20:59
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    let values = [];

    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        values.push(root.val);
        dfs(root.right);
    }

    dfs(root);

    const map = new Map();
    for (const value of values) {
        map.set(value, (map.get(value) || 0) + 1);
    }
    let maximum = Math.max(...map.values());
    let mode = [];
    for (const [k, v] of map) {
        if (v === maximum) mode.push(k);
    }
    return mode;
};

console.log(findMode(TreeNode.create("[1,null,2,2]")));
 