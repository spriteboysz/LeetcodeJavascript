/*
 * Author: Deean
 * Date: 2022-09-26 23:59
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    return command.replace(/\(al\)/g, "al").replace(/\(\)/g, "o")
};

command = "(al)G(al)()()G"
console.log(interpret(command));
 