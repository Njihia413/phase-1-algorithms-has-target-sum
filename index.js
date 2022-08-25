function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    const remainder = target - array[i];
    for(let j = 0; j < array.length; j++) {
      if(i === j) {
        continue;
      }
      if(array[j] == remainder) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2), since there is a nested loop
*/

/* 
  Add your pseudocode here
  1. Iterate through the array 
  2. Subtracting each value in the array from target value
  3. If the remainder is present in the rest of the values
      return true
  4. Else return false
*/

/*
  Add written explanation of your solution here
  Target - Sum of the value and the remainder
  Value - First value from the array
  Remainder - Other value in array to add to the first value to get the target 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
