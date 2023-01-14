/*
 * Author: Deean
 * Date: 2023/1/14 22:09
 * FilePath: sword
 * Description: 
 */

var RecentCounter = function () {
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while (this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;
};

var recentCounter = new RecentCounter()
console.log(recentCounter.ping(1));
console.log(recentCounter.ping(100));
console.log(recentCounter.ping(3001));
console.log(recentCounter.ping(3002));
