const bubbleSort = (arr) => {
  let sortedArr = arr.sort((a, b) => {
    return a - b;
  });
  console.log('sorted algo - 1', sortedArr);
};


// bubble sort
const bubbleSortTwo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  console.log('sorted array', arr);
};

// bubbleSortTwo([1, 3, 5, 63, 8, 9, 12, 2, 3, 4, 1, 1, 3, 13, 45, 22]);

