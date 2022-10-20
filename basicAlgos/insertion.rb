def sort_array(array)
  # for each element in the array 
  for i in 1...(array.length)
    # store i/first element in value 
    value = array[i]
    # the specific iteration number is stored in temp
    temp = i
    # while the iteration is greater than 0 AND the element on the left (array[temp - 1]) is greater than the current element in the array (value), swap the current and preceeding value
    while temp > 0 && array[temp - 1] > value
      array[temp] = array[temp - 1]
      # this next line breaks the while loop
      temp = temp - 1
    end
    # set current element to next element in line, return to line 3
    array[temp] = value
  end
  puts array
end

sort_array([5,1,1,2,0,0])
