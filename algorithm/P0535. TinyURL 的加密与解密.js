/*
 * Author: Deean
 * Date: 2023-06-11 17:47
 * FilePath: algorithm
 * Description:535. TinyURL 的加密与解密
 */

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
    this.hash = new Map();
    this.id = 0;
    this.id++;
    this.hash.set(this.id, longUrl);
    return "https://tinyurl.com/" + this.id;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    let pos = shortUrl.lastIndexOf("/") + 1;
    const key = parseInt(shortUrl.substring(pos));
    return this.hash.get(key);
};

url = "https://leetcode.com/problems/design-tinyurl"
console.log(decode(encode(url)));