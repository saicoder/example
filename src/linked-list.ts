class Item<T> {
  constructor(public value: T, public next: Item<T> | null = null) {}
}

export class LinkedList<T> {
  private head: Item<T> | null = null
  private tail: Item<T> | null = null

  /** 
   * Add a new element to the end of the linked list.
   * Time complexity: O(1)
   * */
  public add(value: T): void {
    const newNode = new Item(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      this.tail = newNode
    }
  }

  /** 
   * Get the value of the first element in the linked list.
   * Time complexity: O(1)
   */
  public headValue(): T | null {
    return this.head ? this.head.value : null
  }

  /**
   * Get the value of the last element in the linked list.
   * Time complexity: O(1)
   */
  public tailValue(): T | null {
    return this.tail ? this.tail.value : null
  }

  /**
   * Search for a specific value in the linked list.
   * Time complexity: O(n), where n is the number of elements in the list.
   */
  public search(target: T): boolean {
    let current = this.head
    while (current) {
      if (current.value === target) {
        return true
      }
      current = current.next
    }
    return false
  }
}
