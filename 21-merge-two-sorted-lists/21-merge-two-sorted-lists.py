# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        result_header = ListNode()
        current_node = result_header
        
        while list1 or list2:
            if ( list1 and list2 and list1.val <= list2.val ) or list1 and not list2:
                current_node.next = ListNode()
                current_node.next.val = list1.val
                current_node = current_node.next
                list1 = list1.next
            elif list2:
                current_node.next = ListNode()
                current_node.next.val = list2.val
                current_node = current_node.next
                list2 = list2.next
                
        result_header = result_header.next
            
        return result_header
        