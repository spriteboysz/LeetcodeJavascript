/*
 * Author: Deean
 * Date: 2023-07-01 11:24
 * FilePath: algorithm
 * Description:599. 两个列表的最小索引总和
 */


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let map1 = new Map(), map2 = new Map();
    for (let i = 0; i < list1.length; i++) {
        map1.set(list1[i], i);
    }
    for (let i = 0; i < list2.length; i++) {
        map2.set(list2[i], i);
    }
    let map = new Map();
    for (const restaurant of list1) {
        if (map2.has(restaurant)) {
            map.set(restaurant, map1.get(restaurant) + map2.get(restaurant));
        }
    }
    let min_index = Math.min(...map.values());
    let restaurant = [];
    for (const [k, v] of map) {
        if (v === min_index) {
            restaurant.push(k);
        }
    }
    return restaurant;
};

console.log(findRestaurant(list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    list2 = ["KFC", "Shogun", "Burger King"]));