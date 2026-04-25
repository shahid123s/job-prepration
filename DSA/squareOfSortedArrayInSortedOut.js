/**
 * @param {number[]} nums
 * @return {number[]}
 */


let num = [-7, -3, 2, 3, 11]

var sortedSquares = function (nums) {
  let temp = new Array(nums.length).fill(1);
  let left = 0;
  let right = nums.length - 1;

  for (let i = temp.length - 1; i >= 0; i--) {
    let abs = 0;
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      abs = nums[left] * nums[left];
      left++;
    } else {
      abs = nums[right] * nums[right];
      right--
    }
    temp[i] = abs
  }

    return temp;

}


sortedSquares   (num)