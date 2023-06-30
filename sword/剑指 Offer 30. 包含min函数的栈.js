/*
 * Author: Deean
 * Date: 2023-06-29 23:40
 * FilePath: sword
 * Description:剑指 Offer 30. 包含min函数的栈
 */


/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.stack1 = [];
    this.stack2 = [Infinity];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack1.push(x);
    this.stack2.push(Math.min(x, this.stack2[this.stack2.length - 1]));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack1.pop();
    this.stack2.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack2[this.stack2.length - 1];
};

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.min());
obj.pop();
console.log(obj.top());
console.log(obj.min());