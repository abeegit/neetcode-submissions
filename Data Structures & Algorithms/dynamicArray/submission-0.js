class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
       return this.array[i]; 
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        // TODO: 
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }
        this.array[this.size++] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        // TODO: replace array.pop with your own
        const lastElement = this.array[(this.size--)-1];
        //need to delete the last element at index (size - 1)
        delete this.array[this.size] // last element index equal to this.size after decrement
        return lastElement;
    }

    /**
     * @returns {void}
     */
    resize() {
        const newCapacity = this.capacity * 2;
        const capacity = this.capacity;
        const array = this.array;
        const newArray = new Array(newCapacity);
        for (let i = 0; i < capacity; i++) {
            newArray[i] = array[i];
        }
        this.newArray = array;
        this.capacity = newCapacity;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }

}
