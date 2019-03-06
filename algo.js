/*Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.*/


 function ListNode(val) {
    this.val = val;
     this.next = null;
 }

let findLength = function (list) {
    
  if (!list) return 0
  return 1 + findLength(list.next)   
}

let findMiddle = function (list, counter) {
  if (counter === 0) return list
  return findMiddle(list.next, counter-1)
}
var middleNode = function(head) {
  const length = findLength(head)
  const middle = Math.floor(length/2)
  return findMiddle(head, middle)
};

const list = new ListNode(12)
list.next = new ListNode(12)
list.next.next = new ListNode(12)


console.log(middleNode(list))