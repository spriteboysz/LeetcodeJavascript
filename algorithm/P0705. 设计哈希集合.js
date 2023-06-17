/*
 * Author: Deean
 * Date: 2023-06-16 21:33
 * FilePath: algorithm
 * Description:705. 设计哈希集合
 */

var MyHashSet = function () {
    this.set = new Set();
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.set.add(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    this.set.delete(key);
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return this.set.has(key);
};

var obj = new MyHashSet()
obj.add(1)
obj.remove(2)
console.log(obj.contains(1));