// arithmetic functions
const add = function (a, b) {
    return a + b
};

const subtract = function (a, b) {
    return a - b
};

const sum = function (nums) {
    let sumAll = nums.reduce((num1, num2) => num1 + num2, 0)
    return sumAll
};

const multiply = function (nums) {
    let multiplyAll = nums.reduce((num1, num2) => num1 * num2)
    return multiplyAll

};

const power = function (a, b) {
    return a ** b
};

const factorial = function (num) {
    let answer = 1
    if (num == 0 || num == 1) {
        return answer
    } else {
        for (let i = num; i >= 1; i--) {
            answer = answer * i
        }
        return answer
    }
};

