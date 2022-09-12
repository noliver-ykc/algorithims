function sort_array(inputArr) {
    let n = inputArr.length;
  // for each in our arr
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last sorted element of our  subarray
            let j = i-1; 
            console.log(`outer ${j}`)
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                //this line breaks the loop
                j--;
                console.log(`inner ${j}`)
            }
            // set current element to next element in line, return to line 4
            inputArr[j+1] = current;
            console.log(`outer current ${current}`)
        }
    console.log(inputArr);
}

sort_array([5,1,1,2,0,0]);
