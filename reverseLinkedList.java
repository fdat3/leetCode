package Practice;

public class LinkedList {

	public static class ListNode {
		int val;
		ListNode next;

		ListNode() {
		}

		ListNode(int val) {
			this.val = val;
		}

		ListNode(int val, ListNode next) {
			this.val = val;
			this.next = next;
		}
	}
	
	public static ListNode reverseList(ListNode head) {
		
		ListNode curNode = head;
		while(curNode.next != null && curNode != null) {
			ListNode nextNode = curNode.next;
			curNode.next = nextNode.next;
			nextNode.next = head;
			head = nextNode;
		}
		return head;
	}
	
	public static void printLinkedList(ListNode head) {
		while(head != null) {
			System.out.print(head.val);
			head = head.next;
		}
		System.out.println();
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ListNode a = new ListNode (1);
		ListNode b = new ListNode (2);
		ListNode c = new ListNode (3);
		a.next = b;
		b.next = c;
		ListNode newList = reverseList(a);
		printLinkedList(newList);
	}

}
