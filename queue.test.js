const Queue = require("./queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should enqueue a node into the queue", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10);
  });

  test("should dequeue a node from the queue", () => {
    queue.enqueue(5);
    queue.enqueue(15);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(15);
  });

  test("should throw error when dequeuing from empty queue", () => {
    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });

  test("should check if the queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});
