import { LinkedList } from './linked-list'

// Example usage:
const list = new LinkedList<number>()
list.add(1)
list.add(2)
list.add(3)

console.log('Head:', list.headValue()) // Output: Head: 1
console.log('Tail:', list.tailValue()) // Output: Tail: 3
console.log('Search 2:', list.search(2)) // Output: Search 2: true
console.log('Search 4:', list.search(4)) // Output: Search 4: false
