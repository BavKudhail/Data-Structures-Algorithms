const a = [1, 2, 3, 9]; // []
const b = [1, 2, 3, 4, 4]; // [4, 4]

const pairs = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
};

let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['e', 'f', 'z', 'h', 'd'];

// brute force linear way of solving problem
const common = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
};

const commonPattern = (arr1, arr2) => {
  let output = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!output[arr1[i]]) {
      output[arr1[i]] = true;
    }
  }

  console.log('output', output);

  //  loop through the second array
  for (let j = 0; j < arr2.length; j++) {
    if (output[array2[j]]) {
      return true;
    }
  }
  return false;
};

console.log(commonPattern(array1, array2));
