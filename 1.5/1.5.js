const nums1 = [1, 2, 3, 0, 0, 0];
//  m = 3,
const nums2 = [2, 5, 6];
//  n = 3

function merge(nums1, m, nums2, n) {
  let arrMerged = [...nums1.slice(0, m), ...nums2.slice(0, n)]
    .sort((a, b) => a - b)
    .forEach((num, index) => nums1.splice(index, 1, num));
}

merge(nums1, 3, nums2, 3);
console.log(nums1);
//79ms