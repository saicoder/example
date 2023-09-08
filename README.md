## Quick Questionnaire - Branko

### Running the examples

```bash
npm install

# Run example
npm start 

# Run Test
npm test
```

### Question 1
> Please write simple implementation for LinkedList data structure with Add, Head, Tail and Search (Lookup) methods. Please explain time complexity for Add and Search methods of your implementation.

The implementation is in `linked-list.ts` file with the time complexities in the comments. The complexity of `add` is O(1) because we track
the tail of the list and we append item at the end of the list. The complexity of `search` is O(n) because we need to traverse the entire list.

### Question 2
> Please explain what single-responsibility and interface-segregation principles are and provide simple example.

Single Responsibility Principle means that class or module should have only one responsibility or job. In other words, a class or module should do one thing and do it well. In my example LinkedList is just a container that holds multiple values.

Interface Segregation Principle states that a client (class or module) should never be forced to implement an interface that it doesn't use, or clients shouldn't be forced to depend on methods they do not use. In other words, it encourages breaking large interfaces into smaller, more specific ones so that clients only need to implement the methods relevant to them.

### Question 3
> Please provide simple example of unit test with comments on what is best practice. Good explanation over real implementation is preferred.

The example can be found in `linked-list.spec.ts`. The point of unit test is to test single unit in isolation when possible.
The code that we test also should be written in testable manner (SRP & ISP help here). Tests should be short, specific to each method, with descriptive names. Comments help anyone reading the test code understand the purpose of each test case if the name is not descriptive itself. 

### Question 4
> What is time complexity for Search (Lookup) in HashTable? Please explain.

The time complexity for search in hash map in the best case is O(1) which is average, and in the worst case O(n).
The performance will depend on the number of buckets and the implementation of a hash function.

In best case if hash function is properly designed and distributes keys evenly across buckets and we have enough buckets (minimal as the number of items).
The idea behind this is that you can directly compute the index of the bucket where the element is expected to be based on its key using the hash function.

The worst-case time complexity occurs when there are many hash collisions. Hash collisions happen when two different keys produce the same hash value, causing multiple elements to be placed in the same bucket.
