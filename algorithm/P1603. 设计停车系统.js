/*
 * Author: Deean
 * Date: 2022-09-27 23:24
 * FilePath: algorithm
 * Description: 
 */

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.parking = {1: big, 2: medium, 3: small};
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    if (![1, 2, 3].includes(carType)) return false;
    if (this.parking[carType] > 0) {
        this.parking[carType]--;
        return true;
    }
    return false;
};

parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1)); // 返回 true ，因为有 1 个空的大车位
console.log(parkingSystem.addCar(2)); // 返回 true ，因为有 1 个空的中车位
console.log(parkingSystem.addCar(3)); // 返回 false ，因为没有空的小车位
console.log(parkingSystem.addCar(1)); // 返回 false ，因为没有空的大车位，唯一一个大车位已经被占据了
 