class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        brackets = {
            ")": "(",
            "]": "[",
            "}": "{",
        }
        
        for a in s:
            if a in "({[":
                stack.append(a)
            else:
                if len(stack) > 0:
                    b = stack.pop()
                else:
                    return False
                
                if brackets[a] != b:
                    return False
                
        if len(stack) == 0:    
            return True
        else:
            return False
        