def sort_array(nums)
  i = 0
  while i < nums.length
    j = i
    while j > 0 && nums[j-1] > nums[j]
      swap = nums[j-1]
      nums[j-1] = nums[j]
      nums[j] = swap
    end
    i += 1
  end
  puts nums
end

sort_array([5,1,1,2,0,0])