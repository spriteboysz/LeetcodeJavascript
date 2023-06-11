/*
 * Author: Deean
 * Date: 2023-06-11 17:19
 * FilePath: algorithm
 * Description:2723. 添加两个 Promise 对象
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    return await Promise.all([promise1, promise2]).then(([a, b]) => a + b);
};

promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
console.log(addTwoPromises(promise1, promise2));