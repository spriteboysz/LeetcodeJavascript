/*
 * Author: Deean
 * Date: 2023-06-29 23:47
 * FilePath: algorithm
 * Description: 
 */


var MinStack = function () {
    this.stack1 = [];
    this.stack2 = [Infinity];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack1.push(val);
    this.stack2.push(Math.min(val, this.stack2[this.stack2.length - 1]));
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
MinStack.prototype.getMin = function () {
    return this.stack2[this.stack2.length - 1];
};

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());