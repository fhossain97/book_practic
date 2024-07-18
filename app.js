// let nums = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];
// }
// console.log(sum);

// let nums = [];
// for (let i = 0; i < 100; i++) {
//   nums[i] = i + 1;
// }
// console.log(nums);

// let sentence = "Hello my name is Farhana";
// let words = sentence.split(" ");

// for (let i = 0; i < words.length; i++) {
//   console.log(`Word ${i}: ${words[i]}`);
// }

//shifting to the end of an array
// let nums = [1, 2, 3, 4];
// let newnum = 1;
// let N = nums.length;
// for (let i = N; i >= 0; --i) {
//   console.log(nums[i - 1], i, "Shifting positions one up");
//   nums[i] = nums[i - 1];
// }
// nums[0] = newnum;
// console.log(nums);

//shifting to beginning of array
// let nums = [9, 1, 2, 3, 4, 5];
// for (let i = 0; i < nums.length; ++i) {
//   console.log(nums[i + 1], i, "Shifting positions one down");
//   nums[i] = nums[i + 1];
// }
// console.log(nums);

// function isEven(num) {
//   return num % 2 == 0;
// }

// const even = nums.every(isEven);
// if (even) {
//   console.log("all numbers are even");
// } else {
//   console.log("not all numbers are even");
// }

// function checkIfEven(num) {
//   return num % 2 === 0;
// }
// console.log(checkIfEven(3));

//reduce

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function add(total, current) {
//   return total + current;
// }
// const x = nums.reduce(add);
// console.log(x);

// function concat(accumulatedString, item) {
//   return accumulatedString + item;
// }
// let words = ["the ", "quick ", "brown ", "fox "];
// console.log(words.reduce(concat));

// function afterc(str) {
//   if (str.indexOf("cie") > -1) {
//     console.group(str.indexOf("cie"));
//     return true;
//   }
//   return false;
// }
// let words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
// console.log(words.filter(afterc));

// const arr = [];
// const rows = 3;
// let columns = 4;

// for (let i = 0; i < rows; i++) {
//   arr[i] = [];
//   for (let j = 0; j < columns; j++) {
//     arr[i][j] = j;
//   }
// }

// console.log(arr);
