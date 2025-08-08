class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        len_nums = len(nums)
        valid_nums = set()
        i = 0
        # print("nums: ", nums)
        while i < len_nums:
            left = 0
            right = len_nums-1

            if left==i:
                left+=1
            elif right==i:
                right-=1

            while left < right:
                num_i = nums[i]
                num_left = nums[left]
                num_right = nums[right]

                total = num_i + num_left + num_right

                # print("--------------------")
                # print("num_i: ", num_i)
                # print("num_left: ", num_left)
                # print("num_right: ", num_right)
                # print("total: ", total)

                if total == 0:
                    valid_nums.add(tuple(sorted([num_i, num_left, num_right])))
                    left+=1
                    while (
                        left < right and
                        nums[left] == num_left or
                        left==i
                    ):
                        left+=1

                    right-=1
                    while (
                        left < right and
                        nums[right] == num_right or
                        right==i
                    ):
                        right-=1

                elif total < 0:
                    left+=1
                    while (
                        left < right and
                        nums[left] == num_left or
                        left==i
                    ):
                        left+=1
                else:
                    right-=1
                    while (
                        left < right and
                        nums[right] == num_right or
                        right==i
                    ):
                        right-=1

            i+=1

        return list(valid_nums)
