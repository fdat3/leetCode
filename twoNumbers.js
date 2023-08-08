function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummy = new ListNode();
    let current = dummy;

    while (l1 !== null || l2 !== null) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + carry;

        carry = sum >= 10 ? 1 : 0;
        sum = sum % 10;

        current.next = new ListNode(sum);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
}
console.log(twoSum([2, 4, 3], [5, 6, 4]));