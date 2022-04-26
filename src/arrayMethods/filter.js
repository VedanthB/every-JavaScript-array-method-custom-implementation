// takes a callback and  returns a new array with items that match the callback function

Array.prototype.customFilter = function (callback) {
  let resultArr = [];

  const { length } = this;

  for (let i = 0; i < length; i++) {
    let result = callback(this[i], i, this);
    if (result) {
      resultArr.push(this[i]);
    }
  }

  return resultArr;
};

// console.log([1, 2, 3, 4, 5, 6].customFilter((item) => item < 5));
