const values = [
  0, 3, 4, 6, 8, 9, 14, 17, 19, 24, 28, 29, 35, 38, 43, 47, 49, 52, 54, 57, 58,
  63, 66, 67, 69, 73, 76, 78, 84, 87, 89, 94, 96, 99, 103, 105,
];

const binary_fn = (arr, num) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (num === arr[mid]) {
      return console.log(`${num} found at index ${arr.indexOf(arr[mid])}`);
    } else if (num < arr[mid]) {
      high = mid - 1;
    } else if (num > arr[mid]) {
      low = mid + 1;
    }
  }
  return console.log(`Oops, number not found`);
};

console.log(binary_fn(values, 28));

module.exports = binary_fn;

const binarySearch = (arr, num) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (num < arr[mid]) {
      high = mid - 1;
    } else if (num > arr[mid]) {
      low = mid + 1;
    } else if (num === arr[mid]) {
      return console.log(`${num} found boyyo at index ${mid}`);
    }
  }
};

binarySearch(values, 78);
