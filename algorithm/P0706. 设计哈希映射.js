/*
 * Author: Deean
 * Date: 2023-06-16 21:24
 * FilePath: algorithm
 * Description: 
 */

var MyHashMap = function () {
    this.map = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.map.set(key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    if (!this.map.has(key)) {
        return -1;
    }
    return this.map.get(key);
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    this.map.delete(key);
};

var obj = new MyHashMap()
obj.put(1, 1)
obj.put(2, 2)
console.log(obj.get(1))
console.log(obj.get(3))
obj.remove(1)