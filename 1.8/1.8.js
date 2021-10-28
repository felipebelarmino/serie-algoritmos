function checkIfExist(arr) {
  for (n in arr) {
    let auxArr = [...arr];
    auxArr.splice(n, 1);
    let double = auxArr.some((m) => m * 2 === arr[n]);
    if (double) return true;
  }
  return false;
}
//fazer um for normal e verificar indice n === m
let arr = [0, 0];

console.log(checkIfExist(arr));
