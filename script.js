var removeDuplicates = function (arr) {
  let indexCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[indexCounter] = arr[i];
      indexCounter++;
    }
  }
  return indexCounter;
};

removeDuplicates([1, 1, 2, 2]);
