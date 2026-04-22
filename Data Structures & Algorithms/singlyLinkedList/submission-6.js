class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if ((index + 1 )> this.size) {
            return -1;
        }

        let val = -1; //either I get the index'th element, or its out-of-bounds. Set -1 as default just in case
        let curr = this.head;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                val = curr.val;
                break;
            }
            if (curr.next) {
                curr = curr.next;
            }
        }
        return val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const headNode = new ListNode(val);
        if (this.head) {
            headNode.next = this.head;
        }
        this.head = headNode;
        /*if (this.tail === null) {
            this.tail = headNode;
        }*/
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    // if there is no head, then the node I create is actually a head
    insertTail(val) {
        let curr;
        if (this.head !== null) {
            curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }

            const tailNode = new ListNode(val);
            curr.next = tailNode;
            this.tail = tailNode;
        } else {
            curr = new ListNode(val);
            this.head = curr;
            this.tail = curr; //is the first node the head and the tail? should we have this in insertHead
        }
        
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index + 1 > this.size) {
            return false;
        }
        if (index === 0 && this.head.next !== null) {
            this.head = this.head.next;
        }

        let curr = this.head;
        let prev = null;
        let removed = false;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                if (prev) {
                    prev.next = curr.next;
                }
                
                this.size--;
                removed = true;
                break;
            }
            if (curr.next) {
                if (prev === null) {
                    prev = this.head;
                } else {
                    prev = curr;
                }
                curr = curr.next;
            }
        }
        return removed;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = new Array(this.size);
        let curr = this.head;
        for (let i = 0; i < this.size; i++) {
            values[i] = curr.val;
            curr = curr.next;
        }
        return values;
    }
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
