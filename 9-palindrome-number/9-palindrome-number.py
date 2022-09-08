# class Solution:
#     def isPalindrome(self, x: int) -> bool:
#         x_str = str(x)
#         i = 0
        
#         while i <= len(x_str)/2:
#             if x_str[i] != x_str[(i+1)*-1]:
#                 return False
            
#             i += 1
            
#         return True

class Solution:
    def isPalindrome(self, x: int) -> bool:
        s = str(x)
        return s == s[::-1]
