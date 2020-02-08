import {Stack, Queue} from "./lifo-fifo";

describe('Stack',() => {
    test("adding the new node to stack",() => {
        const stack = new Stack();
        stack.push(10);
        stack.push(9);
        stack.push(8);
        stack.push(7);
        stack.push(6);
        expect(stack.size).toEqual(5);
        stack.pop();
        expect(stack.size).toEqual(4);
        expect(stack.first.data).toEqual(7);
        expect(stack.last.data).toEqual(10);
    })
});
describe('Queue',() => {
    test("adding the new node to queue",() => {
        const queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(9);
        queue.enqueue(8);
        queue.enqueue(7);
        queue.enqueue(6);
        expect(queue.size).toEqual(5);
        queue.dequeue();
        expect(queue.size).toEqual(4);
        expect(queue.first.data).toEqual(9);
        expect(queue.last.data).toEqual(6);
    })
})