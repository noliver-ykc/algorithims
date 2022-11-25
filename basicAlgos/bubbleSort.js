// # Bubble Sort

// *A sorting algorithim where the biggest values will bubble to the top. When the array elements are few and the array is nearly sorted, bubble sort is effective and efficient.*

// **Pseudo Code**

// - Start looping with a variable called i from the end of the array towards the beginning
// - Start an inner loop with a var called j from the beginning until i -1
// - if arr[j] is greater than arr[j+1], then swap those two values!

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

// **Time Complexity**: O(n2)

// **Space Complexity**: O(1)
