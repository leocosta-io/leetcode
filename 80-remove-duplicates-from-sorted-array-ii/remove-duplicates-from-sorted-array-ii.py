class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k=len(nums)
        i=1
        last=nums[0]
        count=1

        while i<len(nums):
            if last==nums[i]:
                if count==2:
                    nums[i]=None
                    k-=1
                else:
                    count+=1
            else:
                last=nums[i]
                count=1
            i+=1

        # print("nums1: ", nums)

        pos = 0
        for i in range(len(nums)):
            if nums[i] is not None:
                nums[pos] = nums[i]
                pos += 1

        for i in range(pos, len(nums)):
            nums[i] = None

        # print("nums2: ", nums)
        return k
