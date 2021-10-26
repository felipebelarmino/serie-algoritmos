// function sortedSquares(nums) {
//   return nums.map((num) => Math.pow(num, num)).sort((a, b) => a - b);
// }
//64ms

function sortedSquares(nums) {
  let squares = [];

  for (num of nums) {
    squares.push(num * num);
  }

  let sortedSquares = squares.sort((a, b) => a - b);

  return sortedSquares;
}
//85ms

const nums = [-7, -3, 2, 3, 11];

console.log(sortedSquares(nums));

console.log(bin2dec(11));
function bin2dec(bin){
  return parseInt(bin, 2)
}
//3