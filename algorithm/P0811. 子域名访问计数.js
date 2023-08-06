/*
 * Author: Deean
 * Date: 2023-08-06 09:58
 * FilePath: algorithm
 * Description:811. 子域名访问计数
 */

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let map = new Map();
    cpdomains.forEach((cpdomain) => {
        let [num, domain] = cpdomain.split(" ");
        num = parseInt(num);
        map.set(domain, (map.get(domain) || 0) + num);
        for (let i = 0, n = domain.length; i < n; i++) {
            if (domain[i] === '.') {
                let subdomain = domain.slice(i + 1);
                map.set(subdomain, (map.get(subdomain) || 0) + num);
            }
        }
    });
    
    let subdomains = [];
    map.forEach((num, subdomain) => {
        subdomains.push(num + " " + subdomain);
    });
    return subdomains;
};

console.log(subdomainVisits(cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));