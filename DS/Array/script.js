const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 4 items, 4 shelves in memory = 16 bytes

let output = strings.reduce((acc, sum) => {
  acc = acc + sum;
}, '');

// C++ - within languages like C++, you have to specifiy the length of the array
// int a[20]
