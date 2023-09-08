import { expect } from 'chai'
import { LinkedList } from './linked-list'

describe('LinkedList', () => {
  let list: LinkedList<number>

  beforeEach(() => {
    list = new LinkedList<number>()
  })

  it('should return null for head and tail values in an empty list', () => {
    // Test edge cases, such as an empty list, to ensure robustness.
    expect(list.headValue()).to.be.null
    expect(list.tailValue()).to.be.null
  })

  it('should add elements to the list', () => {
    list.add(1)
    list.add(2)
    list.add(3)

    // Test each operation separately and with meaningful assertions.
    expect(list.headValue()).to.equal(1)
    expect(list.tailValue()).to.equal(3)
  })

  it('should search for elements in the list', () => {
    list.add(1)
    list.add(2)
    list.add(3)

    // Test the search method for both existing and non-existing values.
    expect(list.search(2)).to.be.true
    expect(list.search(4)).to.be.false
  })

  it('should return false for search in an empty list', () => {
    // Test edge cases, such as an empty list, to ensure robustness.
    expect(list.search(1)).to.be.false
  })
})
