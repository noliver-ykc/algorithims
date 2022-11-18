// # Linear search

// *This is what javascript indexOf does behind the scenes.* 

// **Pseudo Code**

// - This function accepts an array and a value
// - Loop through the array and check if the current element is equal to the value
// - If it is, reutrn the index at which the element is found
// - If the value is never found, return -1

// **sample**

// linearSearch([10, 15, 20, 25, 30], 15) // 1
// linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
// linearSearch([100], 100) // 0
// linearSearch([1,2,3,4,5], 6) // -1

function linearSearch(arr, goal){
  // add whatever parameters you deem necessary - good luck!
    for(let i = 0; i < arr.length; i++ ) {
        if (arr[i] == goal) return i
    }
    return -1
}

// **Time Complexity**: O(n)

// **Space Complexity**: O(1)
