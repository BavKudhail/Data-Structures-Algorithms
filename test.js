// the below is a way to solve the problem using a brute force method
const a = [1, 2, 3, 9]; // []
const b = [1, 2, 3, 4, 4]; // [4, 4]

// linear search

// business is a game of speed and problem solving
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

console.log(pairs(b, 8));

// binary search
