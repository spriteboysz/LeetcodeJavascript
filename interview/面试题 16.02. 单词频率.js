/*
 * Author: Deean
 * Date: 2022-09-30 22:23
 * FilePath: interview
 * Description: 
 */

/**
 * @param {string[]} book
 */
var WordsFrequency = function (book) {
    this.map = new Map();
    book.forEach((word) => {
        this.map.set(word, (this.map.get(word) || 0) + 1);
    });
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
    return (this.map.get(word) || 0);
};

wordsFrequency = new WordsFrequency(["i", "have", "an", "apple", "he", "have", "a", "pen"]);
console.log(wordsFrequency.get("you")); //返回0，"you"没有出现过
console.log(wordsFrequency.get("have")); //返回2，"have"出现2次
console.log(wordsFrequency.get("an")); //返回1
console.log(wordsFrequency.get("apple")); //返回1
console.log(wordsFrequency.get("pen")); //返回1
 