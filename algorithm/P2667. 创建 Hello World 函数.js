/*
 * Author: Deean
 * Date: 2023-06-11 17:27
 * FilePath: algorithm
 * Description:2667. 创建 Hello World 函数
 */

/**
 * @return {Function}
 */
var createHelloWorld = function () {
    return function (...args) {
        return "Hello World";
    }
};

console.log(createHelloWorld(agrs = [{}, null, 42]));