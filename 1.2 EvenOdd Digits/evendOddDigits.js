// function findNumbers(nums) {
//   const countEven = nums.filter(
//     (num) => num.toString().split("").length % 2 === 0
//   );
//   return countEven.length;
// }

const nums = [12, 345, 2, 6, 7896];

console.log(findNumbers(nums));
//87ms

// function findNumbers(nums) {
//   let evenNums = 0;

//   for (let indice = 0; indice < nums.length; indice += 1) {
//     if (nums[indice].toString().split("").length % 2 === 0) {
//       evenNums += 1;
//     }
//   }

//   return evenNums;
// }
//82ms

function findNumbers(nums) {
  let count = 0;
  let evenNums = 0;

  for (num of nums) {
    if (num >= 1) ++count;

    while (num / 10 >= 1) {
      num /= 10;
      console.log(num)
      count += 1;

    }

    if (count % 2 === 0) evenNums += 1;
    count = 0;
  }

  return evenNums;
}
//81ms