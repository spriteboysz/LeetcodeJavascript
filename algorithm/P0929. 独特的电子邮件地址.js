/*
 * Author: Deean
 * Date: 2022-10-04 14:55
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let set = new Set();
    for (const email of emails) {
        let [local, domain] = email.split("@");
        if (local.indexOf("+") >= 0) {
            local = local.slice(0, local.indexOf("+"))
        }
        local = local.replace(/\./g, "");
        console.log(local)
        set.add(local + "@" + domain);
    }
    return set.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"]));
console.log(numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]));
 