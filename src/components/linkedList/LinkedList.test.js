import {ListNode, LinkedList} from "./LinkedList"

test('test the linkedlist:', () => {
let newNode = new ListNode("first", 100);
expect(newNode.showDetails()).toEqual(`subject: first\namount: 100`);
});
 test('test the basic list:', () =>{
     let newlist = new LinkedList();
     expect(newlist.first()).toBeNull();
     expect(newlist.last()).toBeNull();

     newlist.add("One", 100);
     expect(newlist.first().subject).toBe('One');
     expect(newlist.last().subject).toBe('One');
 
     expect(newlist.total()).toBe(100);

     newlist.add('Two', 20.00);
	expect(newlist.first().subject).toBe('One');
	expect(newlist.next().subject).toBe('Two');
    expect(newlist.next().subject).toBe('One');
    
    expect(newlist.last().subject).toBe('Two');
	expect(newlist.prev().subject).toBe('One');
	expect(newlist.prev().subject).toBe('Two');

    expect(newlist.total()).toBe(120);
    
    newlist.add('Three', 30.00);
	expect(newlist.prev().subject).toBe('Two');
	expect(newlist.prev().subject).toBe('One');
    expect(newlist.prev().subject).toBe('Three');
    
    expect(newlist.next().subject).toBe('One');
	expect(newlist.next().subject).toBe('Two');
	expect(newlist.next().subject).toBe('Three');

    expect(newlist.total()).toBe(150);
    
    expect(newlist.prev().subject).toBe('Two');
    newlist.delete();
    expect(newlist.prev().subject).toBe('One');
	expect(newlist.next().subject).toBe('Three');
 })