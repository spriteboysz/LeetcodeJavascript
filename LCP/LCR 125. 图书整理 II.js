/*
 * Author: Deean
 * Date: 2023-09-22 22:55
 * FilePath: LCP
 * Description:LCR 125. 图书整理 II
 */


var CQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (!this.stack2.length) {
        if (!this.stack1.length) {
            return -1;
        }
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    }
    return this.stack2.pop();
};

var obj = new CQueue()
obj.appendTail(1);
obj.appendTail(2);
console.log(obj.deleteHead());