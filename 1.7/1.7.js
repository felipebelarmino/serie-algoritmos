function removeDuplicates(nums) {
  for (let num = 0; num < nums.length; num += 1)
    if (nums[num] === nums[num - 1]) {
      nums.splice(num, 1);
      num -= 1;
    }
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);

console.log(nums);
