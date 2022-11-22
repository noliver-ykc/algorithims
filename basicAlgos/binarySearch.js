// ## Binary Search

// *Much faster than linear search*

// *Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time*

// *Only works on sorted array*

// **Pseudo Code**

// - This function accepts a sorted array and a value
// - Create a left pointer at the start of the array, and a right pointer at the end of the array
// - Create a pointer in the middle (floor)
// - While the left pointer comes before the right pointer and mid =! goal
//      - if the goal is less than arr[middle] move the end point to middle
//      - if the goal is bigger than arr[middle] move the start point to the middle
//      - update the middle
// - when the while loop ends, return the middle else If you never find the value return -1

// **sample:** 

// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1

function binarySearch(arr, goal){
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);
    while(arr[middle] !== goal && start <= end) {
        if(goal < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end)/2);
    }
    if(arr[middle] === goal){
        return middle;
    }
    return -1
}

// **Time Complexity**: O(log n)

// **Space Complexity**: O(1)
