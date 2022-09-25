/*
 * Author: Deean
 * Date: 2022-09-25 23:21
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};

console.log(defangIPaddr(address = "255.100.50.0"));
 