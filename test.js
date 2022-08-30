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

let array1 = ['a', 'd', 'b', 'c', 'd'];
let array2 = ['e', 'f', 'z', 'd', 'r'];

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
  return arr1.some((item) => {
    return arr2.includes(item);
  });
};

console.log(commonPattern(array1, array2));

let boys = ['Dan', 'Bav', 'Ryan', 'John', 'Sam'];
let girls = ['Ellen', 'Jade', 'Lillie', 'Sarah'];

let people = {};

boys.forEach((person) => {
  people[person] = 'male';
});

console.log('people', people);

girls.forEach((girl) => {
  people[girl] = 'female';
});

console.log('people', people);

const hasPairWithSum2 = (arr, sum) => {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
};

console.log(hasPairWithSum2([6, 4, 3, 2, 1, 7], 9));
