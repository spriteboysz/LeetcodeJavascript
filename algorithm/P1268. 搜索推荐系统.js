/*
 * Author: Deean
 * Date: 2023-08-13 11:35
 * FilePath: algorithm
 * Description:1268. 搜索推荐系统
 */

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    let suggest = [];
    for (let i = 0, n = searchWord.length; i < n; i++) {
        let key = searchWord.slice(0, i + 1);
        let row = [];
        for (const product of products) {
            if (product.startsWith(key)) {
                row.push(product);
            }
        }
        suggest.push(row.sort().slice(0, 3));
    }
    return suggest;
};

console.log(suggestedProducts(products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    searchWord = "mouse"));