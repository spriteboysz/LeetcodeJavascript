/*
 * Author: Deean
 * Date: 2022-10-02 22:01
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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    if (root.children.length === 0) {
        return 1;
    } else {
        return Math.max(root.children.map(maxDepth)) + 1;
    }
};

let root = [1, null, 3, 2, 4, null, 5, 6]
console.log(maxDepth(root));
 