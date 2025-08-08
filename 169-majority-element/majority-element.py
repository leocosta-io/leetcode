class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        elements = {}
        i = 0
        n = len(nums)
        for idx, value in enumerate(nums):
            if elements.get(value):
                elements[value]+=1
            else:
                elements[value]=1
            
            if elements[value] > n/2:
                return value
