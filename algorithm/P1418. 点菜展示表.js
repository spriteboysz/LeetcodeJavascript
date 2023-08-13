/*
 * Author: Deean
 * Date: 2023-08-13 10:48
 * FilePath: algorithm
 * Description:1418. 点菜展示表
 */

/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    let foods = new Set(), map = new Map();
    for (const order of orders) {
        let [_, id, food] = order;
        foods.add(food);
        let val = map.get(id) || new Map();
        val.set(food, (val.get(food) || 0) + 1);
        map.set(id, val);
    }
    let names = Array.from(foods).sort();
    let ids = Array.from(map.keys()).sort((a, b) => a - b);
    
    let table = [], header = ["Table", ...names];
    table.push(header);
    for (let i = 0, m = map.size; i < m; i++) {
        let id = ids[i], cnt = map.get(id), row = [id];
        for (let j = 0, n = foods.size; j < n; j++) {
            row.push((cnt.get(names[j]) || 0).toString());
        }
        table.push(row);
    }
    return table;
};

console.log(displayTable(orders = [
    ["David", "3", "Ceviche"],
    ["Corina", "10", "Beef Burrito"],
    ["David", "3", "Fried Chicken"],
    ["Carla", "5", "Water"],
    ["Carla", "5", "Ceviche"],
    ["Rous", "3", "Ceviche"]]));