var validMountainArray = function (arr) {
  let increase = false,
    decrease = false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return false;
    if (arr[i] > arr[i - 1]) {
      if (decrease === true) return false;
      increase = true;
    }
    if (arr[i] < arr[i - 1]) decrease = true;
  }
  return increase && decrease;
};

let arr = [0, 3, 2, 1];

console.log(validMountainArray(arr));
