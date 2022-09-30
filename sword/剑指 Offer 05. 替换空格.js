/*
 * Author: Deean
 * Date: 2022-09-30 23:21
 * FilePath: sword
 * Description: 
 */

/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    return s.replace(/ /g, "%20");
};

console.log(replaceSpace("We are happy."));
 