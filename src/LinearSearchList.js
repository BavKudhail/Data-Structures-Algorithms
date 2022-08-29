// this is one of the simplest algorithms there are
const linear_fn = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};
 
console.log(linear_fn([1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420], 69));

module.exports = linear_fn;

const needle = 'bubble';

const haystack = [1, 2, 4, 5, 6, 7, 'bubble', 8, 9, 0, 1, 2, 3, 4, 5];

const findNeedle = (needle, haystack) => {
  //  this is a dot On notation -
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return console.log(`needle found at index ${i}`);
    }
  }
  return console.log(`needle not found, oopsy`);
};

findNeedle(needle, haystack);

console.log('==========================');

let array = [10, 11, 23, 44, 55, 56, 67, 78, 90, 101, 1221, 2222];

const binaryGap = (arr, num) => {
  let high = array.length;
  let low = 0;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (num === arr[mid]) {
      return console.log(num);
    } else if (num < arr[mid]) {
      high = mid - 1;
    } else if (num > arr[mid]) {
      low = mid + 1;
    }
  }
  return console.log('number not found');
};

binaryGap(array, 55);

const linearFind = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return console.log(`${num} found at index: ${i}`);
    }
  }
  return console.log(`${num} not found here, :-(`);
};

linearFind(array, 101);
