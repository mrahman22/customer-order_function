# customer-order_function

Introduction
One of the tasks that V carries out is to refill cash machines or ATM’s (automated teller machines). ATM’s contain 4 cassettes and it is the job of a V operator to fill the cassettes that go into the ATM’s with the order from the customer. Different customers have different ways they have their cassettes filled, for example;
    • 2 cassettes of £10 notes and 2 cassettes of £20 notes
    • 1 cassette of £5 notes and the rest £10 notes
    • 1 cassette each of all 4 UK bank notes £5, £10, £20, £50
    • Etc.
ATM cassettes can take up to 2000 notes and are always filled to capacity. However customers may only want some of the cassettes filled. 
Task
Validate a customer order before it is sent for packing.

Your program will receive a customer order in the form of an array containing something similar to the following;
[
  [‘cassettes’, 4],
  [‘5’, 10000],
  [‘10’, 10000],
  [‘20’, 10000],
  [‘50’, 10000]
]

The first item in the array is the number of cassettes they want to be filled. This item is optional. If the number of cassettes is not present then you can assume that the order is for 4 cassettes.

The remaining 4 items in the array are for each of the bank note types with the cash value in pounds. All 4 of these are optional but there must be at least one of them present, so for example if the customer does not want any £50 notes then this row will be absent from the input array. These can be in any order and the same bank note will never appear more than once. 

What your program will do is check that the order is valid. If the order has something wrong then your program should fail immediately and return the first error. Some of the things that could be wrong are; 
    1. The cash value of the order is too low to fill the cassettes to capacity
    2. If the customer orders £100,000 in 10 pound notes then that will require 5 cassettes which is too many for the ATM
    3. If the customer orders £3 then there is no valid note for this

Your program should return either an error in the form;

   [‘error’, ‘your description of the error’]

or with this packing instruction;
	
   [‘valid’, ‘order valid, send for packing’]

Technologies
    • You are free to use any language of your choice to complete this task, however JavaScript, TypeScript or C# are preferred if you have experience using them 
    • Your application must run
    • TDD is not required but your application must have unit tests. You are free to use any testing framework or library.
    • You are free to implement any mechanism for feeding input into your solution (e.g. hard coded data within the unit test)