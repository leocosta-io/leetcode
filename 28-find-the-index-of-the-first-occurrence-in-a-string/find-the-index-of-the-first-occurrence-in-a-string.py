class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        i = 0
        haystack_n = len(haystack)
        needle_n = len(needle)
        while i < haystack_n:
            while i < haystack_n and haystack[i]!=needle[0]:
                i+=1

            start=i
            # print("start: ", start)
            j=0
            while i < haystack_n and haystack[i]==needle[j]:
                # print("i: ", i)
                # print("j: ", j)
                if j==needle_n-1:
                    return start
                elif i<haystack_n:
                    i+=1
                    j+=1

            i=start+1

        return -1
            