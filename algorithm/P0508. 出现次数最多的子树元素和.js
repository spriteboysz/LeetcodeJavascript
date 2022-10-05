/*
 * Author: Deean
 * Date: 2022-10-05 21:06
 * FilePath: algorithm
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    let map = new Map(), maximum = 0;

    function dfs(root) {
        if (!root) return 0;
        let sum = root.val + dfs(root.left) + dfs(root.right);
        map.set(sum, (map.get(sum) || 0) + 1);
        maximum = Math.max(maximum, map.get(sum));
        return sum;
    }

    dfs(root);

    let list = [];
    for (const [k, v] of map) {
        if (v === maximum) list.push(k);
    }
    return list;
};

console.log(findFrequentTreeSum(TreeNode.create("[5,2,-5]")));
 