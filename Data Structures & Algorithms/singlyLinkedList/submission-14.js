class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    // idx = 0, idx = mid, idx = last
    // idx = 0 -> check if head exists, return val or -1
    // keep traversing till you get idx
    get(index) {
        let curr = this.head;
        let i = 0;
        while (i < index) {
            if (curr.next) {
                curr = curr.next;
                i++;
            } else {
                break;
            }
        }
        if (i === index && curr !== null && curr.val !== null) {
            return curr.val;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const headNode = new ListNode(val);
        if (this.head) {
            headNode.next = this.head;
        } else {
            // there is no head or tail - this is the first insertHead being called
            this.tail = headNode;
        }
        this.head = headNode;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    // if there is no head, then the node I create is actually a head
    insertTail(val) {
        if (this.tail !== null) {
            const tailNode = new ListNode(val);
            this.tail.next = tailNode; //older tail gets reference to new tail

            this.tail = tailNode; //new tail node becomes tail
        } else {
            // it means there is no head either
            this.insertHead(val);
        }
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        //keep traversing till you find the index
        //when you find the index -> index could be last node. 
        // -> or there could be at least one more
        // may not reach index -> return false

        //effects on tail
        //if index is tail, then tail becomes prev element

        if (this.head && index === 0) {
            this.head = this.head.next;
            return true;
        }

        let curr = this.head;
        let removed = false;
        let i = 0;
        
        while (curr) {
            let next = curr.next;
            let nextIdx = i + 1;
            if (next && nextIdx === index) {
                // either 1. there are elements after index
                if (next.next) {
                    curr.next = next.next;
                    removed = true;
                    break;
                }
                // or this is the final element
                removed = true;
                curr.next = null;
                this.tail = curr;
                break;
            }
            i++;
            curr = curr.next;
        }
    
        return removed;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        if (!this.head) {
            return new Array();
        }

        const values = new Array();
        let curr = this.head;
        let i = 0;
        while (curr.next) {
            values[i] = curr.val;
            curr = curr.next;
            i++;
        }
        values[i] = curr.val;
        return values;
    }
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
