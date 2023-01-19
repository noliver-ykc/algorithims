function twoNumberSum(arr, target) {
  let obj = {}
  let ansArr = []
  for(i in arr){
    let compliment = target - arr[i];
    if(obj[arr[i]]){
      console.log([compliment, arr[i]])
      return ansArr = [compliment, arr[i]]
    }
    // stores each possible answer in the obj
    obj[compliment] = true;
  }
  return ansArr;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

// The reason the compliments are being stored in the "obj" object instead of the "arr[i]" array is that the function is checking to see if the current number in the "arr" array has a compliment that exists within the array (i.e. a pair of numbers that add up to the target number). By storing the compliments in the "obj" object, the function can quickly check if a compliment exists for the current number in the "arr" array by using the "obj" object as a hash table, which has a constant-time lookup. If the function were to store the numbers from the "arr" array in the "obj" object, it would not be able to distinguish between the current number and its compliment, and thus would not be able to determine if a pair of numbers that add up to the target number exists within the "arr" array.
