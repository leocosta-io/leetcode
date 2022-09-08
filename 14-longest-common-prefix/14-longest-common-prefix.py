class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        prefix = ""
        word = strs[0]
        i = 0
        equal = True
        
        while i < len(word) and equal == True:
            for other_word in strs[1:]:
                if i >= len(other_word) or other_word[i] != word[i]:
                    equal = False
                    
            if equal:
                prefix += word[i]
                i += 1
                
        return prefix