# Stack and Queue Implementation

## Problem Domain
Implement Stack and Queue data structures with basic operations and write unit tests using Jest.

## Inputs and Expected Outputs
- Stack:
  - `push(10)` → top = 10
  - `pop()` → returns 10
  - `isEmpty()` → true/false
- Queue:
  - `enqueue(10)` → front = 10
  - `dequeue()` → returns 10
  - `isEmpty()` → true/false

## Edge Cases
- Popping from an empty stack should throw an error.
- Dequeuing from an empty queue should throw an error.

## Visual
**Stack (LIFO)**  
Top → [ 30, 20, 10 ]  

**Queue (FIFO)**  
Front → [ 10, 20, 30 ] ← Rear  

## Algorithm
- Stack:
  - Push: add to end of array.
  - Pop: remove from end of array.
  - Peek: return last element.
- Queue:
  - Enqueue: add to end of array.
  - Dequeue: remove from start of array.
  - Peek: return first element.

## Real Code
See `stack.js`, `queue.js`, `stack.test.js`, and `queue.test.js`.

## Big O Time/Space Complexity
- **Stack**
  - Push: O(1)
  - Pop: O(1)
  - Peek: O(1)
  - Space: O(n)
- **Queue**
  - Enqueue: O(1)
  - Dequeue: O(n) (because of shift in array, unless using linked list)
  - Peek: O(1)
  - Space: O(n)
