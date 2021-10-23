const findMaxConsecutiveOnes = (nums) => {
  let acc = 0, max = 0;

  for (let indice = 0; indice < nums.length; indice += 1) {
    if (nums[indice] === 1) {
      acc += 1;
    } else {
      acc = 0;
    }
    if(acc > max) max = acc;
  }
  return max;
};
//----------------------------------------------------------------

const findMaxConsecutiveNumbers = (nums, numBuscado) => {
  let acc = 0, max = 0;
  for (num of nums) {
    num === numBuscado ? acc += 1 : acc = 0;
    if(acc > max) max = acc;
  }
  return max;
};

const nums = [0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0];


console.log(findMaxConsecutiveOnes(nums));
console.log(findMaxConsecutiveNumbers(nums, 1));

