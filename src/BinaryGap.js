// loops - iterations

// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function:

// function solution(N);

// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..2,147,483,647].

// remove all none enclosed zeros
function trimmedNonEnclosedZeros(str) {
  // trim all non enclosed zeros
  return str.replace(/^0+/, '').split('').reverse().join('').replace(/^0+/, '');
}

// find the binary gap
function solution(num) {
  let binary = num.toString(2);
  let trimmedBinaryGroup = trimmedNonEnclosedZeros(binary).split('1');
  let longestBinaryGap = trimmedBinaryGroup[0].length;

  // for loop
  for (let i = 1; i < trimmedBinaryGroup.length; i++) {
    if (trimmedBinaryGroup[i].length > longestBinaryGap) {
      longestBinaryGap = trimmedBinaryGroup[i].length;
    }
  }
  return longestBinaryGap;
}

// SOLUTION #2
const gap = (num) => {
  // converting number to base 2
  let binary = num.toString(2);
  // removing all non conseq zeroes or empty spaces
  let zeros = binary.match(/0+(?=1)/g) || [''];
  // sorting from highest to lowest and removing last element
  let longest = zeros.sort().pop();
  return longest.length;
};

gap(1042);


// SOLUTION #3

