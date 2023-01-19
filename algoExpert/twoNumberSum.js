function twoNumberSum(arr, target) {
  let obj = {}
  let ansArr = []
  for(i in arr){
    let compliment = target - arr[i];
    if(obj[arr[i]]){
      console.log([compliment, arr[i]])
      return ansArr = [compliment, arr[i]]
    }
    // stores each value we come across as present in our hashtable
    obj[compliment] = true;
  }
  return ansArr;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
