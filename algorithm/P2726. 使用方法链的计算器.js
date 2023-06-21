/*
 * Author: Deean
 * Date: 2023-06-20 23:04
 * FilePath: algorithm
 * Description:2726. 使用方法链的计算器
 */

class Calculator {
    
    /**
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
    
    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.value += value;
        return this;
    }
    
    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.value -= value;
        return this;
    }
    
    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.value *= value;
        return this;
    }
    
    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) throw "Division by zero is not allowed";
        this.value /= value;
        return this;
    }
    
    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value **= value;
        return this;
    }
    
    /**
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}

console.log(new Calculator(10).add(5).subtract(7).multiply(1).divide(1).power(2).getResult());