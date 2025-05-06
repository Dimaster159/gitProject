"use strict"
const str1 = "abcdrf";
const str2 = "ABCDRF";

function compareStrings(str1, str2) {

    if (str1.length === 0 && str2.length === 0) {
        return false;
    }

    if (str1.length !== str2.length) {
        return false;
    }
    if (str1.toUpperCase() === str2.toUpperCase()) {
        const strToArr1 = str1.split('');
        const strToArr2 = str2.split('');

        for (let i = 0; i < strToArr1.length; i++) {
            if (strToArr1[i] === strToArr2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
}

console.log(compareStrings(str1, str2))

function removeExclamationMarks(str) {
    const chengeStr = str.replaceAll('!', '');
    return chengeStr;
}

console.log(removeExclamationMarks('dshf!ds!jdskjf!'))

function minMaxAge(age) {
    let min = 0;
    let max = 0;
    if (age <= 14) {
        min = age - 0.10 * age;
        max = age + 0.10 * age;
        console.log(`${min}-${max}`)
    } else {
        min = Math.floor((age / 2) + 7);
        max = Math.ceil((age - 7) * 2);
        return console.log(`${min}-${max}`)
    }
}

minMaxAge(10);

const arr = ["ч", "о", "л", "а"];

const str = arr.join(',');
console.log(str)

function getEvenOrOdd(num) {
    if (num % 2 === 0) {
        return console.log("Even");
    }
    return console.log("Odd");

}

getEvenOrOdd(5);

function squareNum(num) {
    return num ** 2;
}

console.log(squareNum(6));

function monkeyCount(n) {
    // your code here
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }
    return arr;
}

console.log(monkeyCount(5));

function distinct(a) {
    return [...new Set(a)];

}

console.log(distinct([1, 7, 1, 3, 4, 3, 5, 5, 6, 7]))

function calculator(a, b, sign) {
    // Your code here...
    // const numIsNumber = Number.isInteger(a) && Number.isInteger(b);
    if (Number.isInteger(a) && Number.isInteger(b) && sign == '*') {
        return a * b;
    } else if (Number.isInteger(a) && Number.isInteger(b) && sign == '/') {
        return a / b;
    } else if (Number.isInteger(a) && Number.isInteger(b) && sign == "+") {
        return a + b;
    } else if (Number.isInteger(a) && Number.isInteger(b) && sign == '-') {
        return a - b;
    } else {
        return "unknown value";
    }
}

console.log(calculator(4, 5, "&"))