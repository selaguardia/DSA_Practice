/**
 * Both are linear data structures, allow us to traverse one by one. Where only one data element can be reached.
 * 
 * Difference are how items are removes. Unlike arrays theres no random access operation.
 * Use Stack and Queues to run push, peek, pop. Which are in the begging or end.
 * 
 * Unlike arrays or Linked List we have less methods or less actions to performs. Which is a benefit to have this limiting ability, bc you can control that the person can only perform the right operations that are efficient
 */

//! Stacks
/**
 * LIFO = books stacked. Can only access the top/end.
 * useful for: browser history, writing text: undo / redo
 * 
 * lookup O(n) // dont want to traverse/ heavy operation
 * pop O(1) // remove last item
 * push O(1) // add an item to end
 * peek O(1) // peek last item
 */

//! Queue
/**
 * FIFO = waiting in line at sbux. Can only access the first item.
 * usefor for: waitlist app for concert, check in to rest for table, ordering uber, a printer
 * 
 * loopup O(n)
 * enqueue O(1) -> push //add item to end
 * dequeue O(1) -> pop doesnt take last item, takes first item off
 * peek O(1) // peek first item
 * 
 * Why would you not want to use an array to build a queue?
 * It's very inefficient, bc were removing the 1st item in the list, so you would have to shift all indexex.
 */

// Stacks
// Can be built with arrays or linked lists
// Why with arrays = allow cache locality, makes it technically faster when accessing its item in memory bc next to eachother. But either static or dynamic array. when reaches limit has to double that memory and create new space for it.
// Why with linked list? = scattered in memory, also have extra memory bc holding to pointers. But more dynamic memory, can keep adding to list. 

// Queues
// Can be built with arrays or linked lists
// You DONT want to build with an array bc arrays have indexes, if you need to remove the first item, you now need to shift the rest of the list and reassign the indexes. O(n) linear time. VS Linked List whic we only have pointer to head and tail, so if we remove the first item, we just need to remove the head and reassign to the tail (second person in line).