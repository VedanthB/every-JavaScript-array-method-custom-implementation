//  takes acc and currElement

Array.prototype.customReduce = function (callback, acc) {
  const { length } = this;

  for (let i = 0; i < length; i++) {
    acc = callback(acc, this[i]);
  }

  return acc;
};

const arr = [1, 2, 3];

const add = (previousValue, currentValue) => previousValue + currentValue;

const result = arr.customReduce(add, 0);

// console.log(result);
