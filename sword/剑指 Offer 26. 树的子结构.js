/*
 * Author: Deean
 * Date: 2022-10-05 23:27
 * FilePath: sword
 * Description: 
 */

let TreeNode = require('../common/TreeNode.js');

/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
    if (!A || !B) return false;

    function dfs(rootA, rootB) {
        if (!rootB) return true;
        if (!rootA) return false;
        if (rootA.val !== rootB.val) return false;
        return dfs(rootA.left, rootB.left) && dfs(rootA.right, rootB.right);
    }

    return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

let A = TreeNode.create("[3,4,5,1,2]"), B = TreeNode.create("[4,1]");
console.log(isSubStructure(A, B));
 