function duplicateZeros(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === 0) {
      arr.splice(index, 0, 0);
      index += 1;
      arr.pop();
    }
  }
}

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
