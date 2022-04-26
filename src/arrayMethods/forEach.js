// runs a callback function for every element in the arr,
// it returns undefined, only runs the callback function for every
// element in the array

Array.prototype.customForEach = function (callback) {
  const { length } = this;

  for (let i = 0; i < length; i++) {
    callback(this[i]);
  }
};

// console.log([1, 2, 3, 4, 5].customForEach((value) => console.log(value)));
