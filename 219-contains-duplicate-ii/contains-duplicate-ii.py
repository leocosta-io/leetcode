class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        if k == 0:
            return False

        positions = {}

        for index, num in enumerate(nums):
            if positions.get(num):
                if index-positions[num][-1]<=k:
                    return True

                positions[num].append(index)
            else:
                positions[num]=[index]

        return False