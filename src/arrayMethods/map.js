// returns a new copy of the array

/* 
    1. Create an empty array mapArr.
    2. Loop through array elements.
    3. Call function mapFunc with the current element as the argument.
    4. Push the result of the mapFunc function to the mapArr array.
    5. Return the mapArr array after going through all the elements.
*/

// map takes a callback.

Array.prototype.customMap = function (callback) {
  let resultArr = [];
  const { length } = this;
  console.log(this);

  for (let i = 0; i < length; i++) {
    let result = callback(this[i], i, this);
    resultArr.push(result);
  }

  return resultArr;
};

// console.log([1, 2, 3, 4, 5].customMap((item, index) => item * 10));
