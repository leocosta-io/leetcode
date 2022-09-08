class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        i = 0
        j = None
        
        enumerated_nums = enumerate(nums)
        
        while i < len(nums) and j == None:
            diff = target - nums[i]
            value = nums[i]
            nums[i] = None
            
            if diff in nums:
                j = nums.index(diff)
            else:
                nums[i] = value
                i += 1
            
        return [i,j]
            
        
                
        