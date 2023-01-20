function isValidSubsequence(array, sequence) {
  // traverse sub sequence. 
  // start with a pointer on sub[1], and look for it in arr.
  // move pointer in the sub to sub[2] and move pointer in array to 
  // where the last number was found in main array 
  let subPointer = 0;
  let arrPointer = 0;
  while(subPointer < sequence.length && arrPointer < array.length){
    if(array[arrPointer] == sequence[subPointer]){
      subPointer++;
    }
    arrPointer++;
  }
  return subPointer >= sequence.length ? true : false; 
}
