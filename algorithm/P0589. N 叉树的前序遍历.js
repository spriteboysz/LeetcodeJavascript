/*
 * Author: Deean
 * Date: 2022-10-05 22:09
 * FilePath: algorithm
 * Description: 
 */


// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
}


/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) return [];
    let values = [];

    function dfs(root) {
        if (!root) return;
        values.push(root.val);
        for (let child of root.children) {
            dfs(child);
        }
    }

    dfs(root);
    return values;
};

console.log();
 