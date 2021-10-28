function removeElement(nums, val) {
  for (let num = 0; num < nums.length; num += 1)
    if (nums[num] === val) {
      nums.splice(num, 1);
      num -= 1;
    }
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2];

removeElement(nums, 2);
console.log(nums);
