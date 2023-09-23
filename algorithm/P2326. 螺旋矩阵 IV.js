/*
 * Author: Deean
 * Date: 2023-09-19 23:04
 * FilePath: algorithm
 * Description: 
 */

let ListNode = require('../common/ListNode.js');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
    var matrix = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
    var left = 0, right = n - 1, top = 0, bottom = m - 1;
    while (head) {
        for (let i = left; head && i <= right; i++) {
            matrix[top][i] = head.val;
            head = head.next;
        }
        top++;

        for (let i = top; head && i <= bottom; i++) {
            matrix[i][right] = head.val;
            head = head.next;
        }
        right--;

        for (let i = right; head && i >= left; i--) {
            matrix[bottom][i] = head.val;
            head = head.next;
        }
        bottom--;

        for (let i = bottom; head && i >= top; i--) {
            matrix[i][left] = head.val;
            head = head.next;
        }
        left++;
    }
    return matrix;
};

console.log(spiralMatrix(3, 5, new ListNode.create("[3,0,2,6,8,1,7,9,4,2,5,5,0]")));