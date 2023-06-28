/*
 * Author: Deean
 * Date: 2022-10-02 20:30
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
var postorder = function (root) {
    const values = [];

    function dfs(root) {
        if (!root) return;
        root.children.forEach((node) => {
            dfs(node);
        });
        values.push(root.val);
    }

    dfs(root);
    return values;
};

root = [1, null, 3, 2, 4, null, 5, 6]
console.log(postorder(root));
 