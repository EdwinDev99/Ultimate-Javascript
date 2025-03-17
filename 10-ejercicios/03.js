function callBack(fn, ...rest) {
  fn(...rest);
}

// function log(...arg) {
//   console.log(arg);
// }

// callBack(log, 1, 2, 3, 4);

callBack(
  (...arg) => {
    console.log(arg);
  },
  1,
  2,
  3,
  4
);
