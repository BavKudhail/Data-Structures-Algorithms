var removeDuplicates = function (arr) {
  let indexCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    let prevNum = arr[i - 1];

    if (currNum !== prevNum) {
      arr[indexCounter] = currNum;
      indexCounter++;
    }
  }

  let result = arr.splice(0, indexCounter);
  console.log(result, indexCounter);
  return indexCounter;
};

removeDuplicates([1, 1, 2, 2, 3, 4]);
