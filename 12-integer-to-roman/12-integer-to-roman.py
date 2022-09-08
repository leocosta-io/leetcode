class Solution:
    def intToRoman(self, num: int) -> str:
        convert_tab = {
            1: "I",
            4: "IV",
            5: "V",
            9: "IX",
            10: "X",
            40: "XL",
            50: "L",
            90: "XC",
            100: "C",
            400: "CD",
            500: "D",
            900: "CM",
            1000: "M",
        }

        num_roman = ""

        keys_int = sorted(convert_tab.keys(), reverse=True)

        for key_int in keys_int:
            tmp = ""
            if num >= key_int:
                tmp = int(num / key_int) * convert_tab[key_int]
                num_roman += tmp
                num -= int(num / key_int) * key_int

        return num_roman

                
            
        