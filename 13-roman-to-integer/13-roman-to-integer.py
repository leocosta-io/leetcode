class Solution:
    def romanToInt(self, s: str) -> int:
        convert_tab = {
            'I': 1, 'V': 5, 'X': 10,
            'L': 50, 'C': 100, 'D': 500,
            'M': 1000
        }
        total = 0
        prev = None
        
        for letter in s[::-1]:            
            number = convert_tab[letter]
            
            if prev and prev > number:
                total -= number
            else:
                total += number
                
            prev = number

        return total
            
            
        