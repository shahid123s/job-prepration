/**
 * @param {number[]} nums
 * @return {number[][]}
 */



var threeSum = function (nums) {
  let map = {};
  let out = [];
  nums.sort((a, b) => a - b);
// 
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i+1;
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        map[[nums[i], nums[left], nums[right]]] = [nums[i], nums[left], nums[right]];
        left++;
        right--;
      }
      else if (sum > 0){
          right--;
      } else{
          left++;
      }
      console.log(left, right, 'left and right')
    }
  }

  for (let key in map) {
    out.push(map[key])
  };
  console.log(out)
};


let input = [-1, 0, 1, 2, -1, -4];
threeSum(input) 