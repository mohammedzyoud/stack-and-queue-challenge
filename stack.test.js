const Stack = require("./stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("should push a node onto the stack", () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toBe(20);
  });

  test("should pop a node from the stack", () => {
    stack.push(5);
    stack.push(15);
    expect(stack.pop()).toBe(15);
    expect(stack.pop()).toBe(5);
  });

  test("should throw error when popping from empty stack", () => {
    expect(() => stack.pop()).toThrow("Stack is empty");
  });

  test("should check if the stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });
});
